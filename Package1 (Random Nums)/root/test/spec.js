const utils = require("..");
const assert = require("assert");

assert.strictEqual(typeof utils.randomiser(20,100), "number");

console.log(`\u001B[32m✓\u001B[39m Tests passed`);