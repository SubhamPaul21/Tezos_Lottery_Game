import { Buffer } from 'node:buffer';

let globalThis = require('globalthis/polyfill')();

globalThis.Buffer = Buffer;