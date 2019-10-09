'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callbackfn, thisArg) {
    for (let i = 0; i < this.length; i++) {
      if (!callbackfn.call(thisArg, this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
