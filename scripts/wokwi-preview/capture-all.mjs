#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(fileURLToPath(new URL('.', import.meta.url)), '../..');
const projectsDir = join(repoRoot, 'projects');
const captureScript = fileURLToPath(new URL('./capture.mjs', import.meta.url));

function listAllWokwiProjects() {
  return readdirSync(projectsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join('projects', entry.name).replace(/\\/g, '/'))
    .filter((projectPath) => existsSync(join(repoRoot, projectPath, 'wokwi.toml')))
    .sort();
}

for (const project of listAllWokwiProjects()) {
  console.log(`\n=== ${project} ===`);
  const projectDir = join(repoRoot, project);
  const sketch = readdirSync(projectDir).find((name) => name.endsWith('.ino'));
  if (!sketch) {
    console.warn(`Skipping ${project}: no .ino sketch found`);
    continue;
  }
  execSync(
    `arduino-cli compile --fqbn arduino:avr:uno --output-dir build "${sketch}"`,
    { cwd: projectDir, stdio: 'inherit' },
  );
  execSync(`node "${captureScript}" --project "${project}"`, {
    cwd: repoRoot,
    stdio: 'inherit',
  });
}
