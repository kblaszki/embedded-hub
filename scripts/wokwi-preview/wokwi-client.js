// SPDX-License-Identifier: MIT
// SPDX-FileCopyrightText: 2025 CodeMagic LTD
// Vendored from https://github.com/wokwi/wokwi-embed-example

import { byteArrayToBase64, base64ToByteArray } from './base64.js';

export class WokwiClient extends EventTarget {
  lastId = 0;
  pendingCommands = new Map();

  /**
   * @param {import('./message-port-transport.js').MessagePortTransport} transport
   */
  constructor(transport) {
    super();
    this.transport = transport;
    this.transport.onMessage = (message) => {
      this.processMessage(message);
    };
  }

  /**
   * @param {string} name
   * @param {string|ArrayBuffer|Uint8Array} content
   */
  async fileUpload(name, content) {
    if (typeof content === 'string') {
      return this.sendCommand('file:upload', { name, text: content });
    }
    const bytes = content instanceof Uint8Array ? content : new Uint8Array(content);
    return this.sendCommand('file:upload', {
      name,
      binary: byteArrayToBase64(bytes),
    });
  }

  async simStart(params) {
    return this.sendCommand('sim:start', params);
  }

  async sendCommand(command, params) {
    return new Promise((resolve, reject) => {
      const id = this.lastId++;
      this.pendingCommands.set(id.toString(), [resolve, reject]);
      const message = { type: 'command', command, params, id: id.toString() };
      this.transport.send(message);
    });
  }

  processMessage(message) {
    switch (message.type) {
      case 'hello':
        this.dispatchEvent(new CustomEvent('wokwi:connected', { detail: message }));
        break;
      case 'event':
        this.dispatchEvent(new CustomEvent(message.event, { detail: message.payload }));
        break;
      case 'response':
        this.processResponse(message);
        break;
    }
  }

  processResponse(message) {
    const id = message.id ?? '';
    const [resolve, reject] = this.pendingCommands.get(id) ?? [];
    if (resolve && reject) {
      this.pendingCommands.delete(id);
      if (message.error) {
        const { result } = message;
        reject(new Error(`Error ${result.code}: ${result.message}`));
      } else {
        resolve(message.result);
      }
    }
  }
}
