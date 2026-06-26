// SPDX-License-Identifier: MIT
// Browser driver for Wokwi embed preview capture.

import { MessagePortTransport } from './message-port-transport.js';
import { WokwiClient } from './wokwi-client.js';
import { base64ToByteArray } from './base64.js';

function applyLayout(config) {
  const iframe = document.getElementById('wokwi-embed');
  iframe.width = String(config.width ?? 1200);
  iframe.height = String(config.height ?? 675);
}

async function runCapture(config) {
  applyLayout(config);

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Timed out waiting for Wokwi embed connection'));
    }, 120_000);

    window.addEventListener('message', (event) => {
      if (!event.data?.port) {
        return;
      }

      clearTimeout(timeout);
      const client = new WokwiClient(new MessagePortTransport(event.data.port));

      client.addEventListener('wokwi:connected', async () => {
        try {
          const firmware = base64ToByteArray(config.firmwareBase64);
          await client.fileUpload('diagram.json', config.diagram);
          await client.fileUpload(config.firmwareName, firmware);
          await client.simStart({ firmware: config.firmwareName });
          window.__WOKWI_PREVIEW_READY__ = true;
          resolve();
        } catch (err) {
          window.__WOKWI_PREVIEW_ERROR__ = String(err);
          reject(err);
        }
      });
    });
  });
}

function waitForConfig() {
  return new Promise((resolve) => {
    if (window.__WOKWI_PREVIEW_CONFIG__) {
      resolve(window.__WOKWI_PREVIEW_CONFIG__);
      return;
    }
    const interval = setInterval(() => {
      if (window.__WOKWI_PREVIEW_CONFIG__) {
        clearInterval(interval);
        resolve(window.__WOKWI_PREVIEW_CONFIG__);
      }
    }, 50);
  });
}

waitForConfig()
  .then((config) => runCapture(config))
  .catch((err) => {
    window.__WOKWI_PREVIEW_ERROR__ = String(err);
    console.error(err);
  });
