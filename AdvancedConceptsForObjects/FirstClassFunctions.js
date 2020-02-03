'use strict';

const sum = function (x, y) {
  return x + y;
};

const run = function (fn, a, b) {
  console.log(fn(a, b));
};

run(sum, 10, 5);

run(function (x, y) {
  return x * y;
}, 10, 5);