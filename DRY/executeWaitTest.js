'use strict';

const executeWait = require('../lib/executeWait');

const timeout = 500;
const delayedLog = executeWait(function (time) {
  console.log(`delayedLog called after ${time} ms`);
}, timeout);

delayedLog(timeout);
