import { readFileSync } from 'node:fs';

/**
 * Minimal parser for wokwi.toml fields used by preview capture.
 * @param {string} content
 */
export function parseWokwiToml(content) {
  const result = {
    firmware: 'build/sketch.ino.hex',
    preview: {
      delay_ms: 1500,
      width: 1200,
      height: 675,
      offset_left: 0,
      offset_top: 0,
    },
  };

  const firmwareMatch = content.match(/^\s*firmware\s*=\s*"([^"]+)"/m);
  if (firmwareMatch) {
    result.firmware = firmwareMatch[1];
  }

  const previewSection = content.match(/\[preview\]([\s\S]*?)(?:\n\[|$)/);
  const previewBody = previewSection ? previewSection[1] : content;

  const delayMatch = previewBody.match(/^\s*delay_ms\s*=\s*(\d+)/m);
  if (delayMatch) {
    result.preview.delay_ms = Number(delayMatch[1]);
  }

  const widthMatch = previewBody.match(/^\s*width\s*=\s*(\d+)/m);
  if (widthMatch) {
    result.preview.width = Number(widthMatch[1]);
  }

  const heightMatch = previewBody.match(/^\s*height\s*=\s*(\d+)/m);
  if (heightMatch) {
    result.preview.height = Number(heightMatch[1]);
  }

  const offsetLeftMatch = previewBody.match(/^\s*offset_left\s*=\s*(-?\d+)/m);
  if (offsetLeftMatch) {
    result.preview.offset_left = Number(offsetLeftMatch[1]);
  }

  const offsetTopMatch = previewBody.match(/^\s*offset_top\s*=\s*(-?\d+)/m);
  if (offsetTopMatch) {
    result.preview.offset_top = Number(offsetTopMatch[1]);
  }

  return result;
}

/**
 * @param {string} projectDir absolute or relative path to projects/NN-name
 */
export function loadWokwiConfig(projectDir) {
  const tomlPath = `${projectDir.replace(/\\/g, '/')}/wokwi.toml`;
  const content = readFileSync(tomlPath, 'utf8');
  return parseWokwiToml(content);
}
