'use strict';

/*
  Function executeWait() executes a function after waiting given millliseconds (timeout).
  It returns a function that you can pass an array of arguments.
*/
const executeWait = function (funct, wait) {
  var timeout,
    callNow = true;

  return function () {
    var thisVal = this,
      args = arguments;

    var later = function () {
      callNow = true;
    };
    if (callNow) {
      callNow = false;
      funct.apply(thisVal, args);
      timeout = setTimeout(later, wait);
    }
  };
};

module.exports = executeWait;
