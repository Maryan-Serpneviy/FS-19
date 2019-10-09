'use strict';

/**
 * Implement method Every
 */
function applyCustomEvery() {
  [].__proto__.every2 = function(callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      if (!callback.call(thisArg, this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
}

module.exports = applyCustomEvery;
