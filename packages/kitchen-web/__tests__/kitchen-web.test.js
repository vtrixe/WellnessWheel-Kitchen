'use strict';

const kitchenWeb = require('..');
const assert = require('assert').strict;

assert.strictEqual(kitchenWeb(), 'Hello from kitchenWeb');
console.info('kitchenWeb tests passed');
