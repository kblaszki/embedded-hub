#!/usr/bin/env node

import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { byteArrayToBase64 } from './base64.js';
import { centerDiagramForPreview } from './center-diagram.mjs';
import { loadWokwiConfig } from './parse-wokwi-toml.mjs';

const repoRoot = resolve(fileURLToPath(new URL('.', import.meta.url)), '../..');
const previewDir = fileURLToPath(new URL('.', import.meta.url));

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
};

function parseArgs(argv) {
  let project = '';
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--project') {
      project = argv[++i] ?? '';
    }
  }
  if (!project) {
    console.error('Usage: capture.mjs --project projects/NN-name');
    process.exit(1);
  }
  return project.replace(/\\/g, '/');
}

function startStaticServer(rootDir) {
  return new Promise((resolvePromise) => {
    const server = createServer((req, res) => {
      const urlPath = (req.url ?? '/').split('?')[0];
      const safePath = urlPath === '/' ? '/host.html' : urlPath;
      const filePath = join(rootDir, safePath);

      if (!filePath.startsWith(rootDir)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      if (!existsSync(filePath)) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      const ext = extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] ?? 'application/octet-stream' });
      res.end(readFileSync(filePath));
    });

    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        throw new Error('Failed to bind preview server');
      }
      resolvePromise({ server, port: address.port });
    });
  });
}

async function captureOnce(projectPath) {
  const absoluteProject = resolve(repoRoot, projectPath);
  if (!existsSync(join(absoluteProject, 'wokwi.toml'))) {
    throw new Error(`Missing wokwi.toml in ${projectPath}`);
  }
  if (!existsSync(join(absoluteProject, 'diagram.json'))) {
    throw new Error(`Missing diagram.json in ${projectPath}`);
  }

  const config = loadWokwiConfig(absoluteProject);
  const firmwarePath = join(absoluteProject, config.firmware);
  if (!existsSync(firmwarePath)) {
    throw new Error(
      `Firmware not found: ${firmwarePath}\nCompile first: arduino-cli compile --fqbn arduino:avr:uno --output-dir build <sketch>.ino`,
    );
  }

  const diagramRaw = readFileSync(join(absoluteProject, 'diagram.json'), 'utf8');
  const diagram = centerDiagramForPreview(
    diagramRaw,
    config.preview.width,
    config.preview.height,
    {
      left: config.preview.offset_left,
      top: config.preview.offset_top,
    },
  );
  const firmwareBytes = readFileSync(firmwarePath);
  const firmwareName = config.firmware.split('/').pop() ?? 'firmware.hex';

  const previewConfig = {
    diagram,
    firmwareBase64: byteArrayToBase64(firmwareBytes),
    firmwareName,
    width: config.preview.width,
    height: config.preview.height,
    delay_ms: config.preview.delay_ms,
  };

  const outputDir = join(absoluteProject, 'schematics');
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, 'preview.png');

  const { server, port } = await startStaticServer(previewDir);
  const browser = await chromium.launch({ headless: true });

  try {
    const context = await browser.newContext({
      viewport: { width: config.preview.width, height: config.preview.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    await page.addInitScript((cfg) => {
      window.__WOKWI_PREVIEW_CONFIG__ = cfg;
    }, previewConfig);

    await page.goto(`http://127.0.0.1:${port}/host.html`, {
      waitUntil: 'load',
      timeout: 60_000,
    });

    await page.waitForFunction(
      () => window.__WOKWI_PREVIEW_READY__ === true || window.__WOKWI_PREVIEW_ERROR__,
      { timeout: 120_000 },
    );

    const error = await page.evaluate(() => window.__WOKWI_PREVIEW_ERROR__);
    if (error) {
      throw new Error(error);
    }

    await page.waitForTimeout(config.preview.delay_ms);

    const iframe = page.locator('#wokwi-embed');
    await iframe.screenshot({ path: outputPath, type: 'png' });

    console.log(`Saved ${outputPath}`);
  } finally {
    await browser.close();
    await new Promise((resolveClose) => server.close(resolveClose));
  }
}

async function main() {
  const projectPath = parseArgs(process.argv.slice(2));

  try {
    await captureOnce(projectPath);
  } catch (firstError) {
    console.warn(`First capture attempt failed: ${firstError.message}`);
    console.warn('Retrying once...');
    await captureOnce(projectPath);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
