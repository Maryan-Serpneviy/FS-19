'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callbackfn, thisArg) {
    const O = Object(this);

    for (let i = 0; i < this.length; i++) {
      let kValue;

      if (i in O) {
        kValue = O[i];
        const testResult = callbackfn.call(thisArg, kValue, i, O);
        if (!testResult) {
          return false;
        }
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
