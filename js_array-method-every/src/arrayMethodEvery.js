'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callbackfn, thisArg) {
    if (this === null || typeof callbackfn !== 'function') {
      throw new TypeError();
    }

    let T, k;

    const O = Object(this);

    const len = O.length >>> 0;

    if (arguments.length > 1) {
      T = thisArg;
    }

    k = 0;

    while (k < len) {
      let kValue;

      if (k in O) {
        kValue = O[k];
        const testResult = callbackfn.call(T, kValue, k, O);
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}

module.exports = applyCustomEvery;
