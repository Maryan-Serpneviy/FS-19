'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let from = fromIndex;

    if (fromIndex > 0) { from += fromIndex; }
    if (fromIndex < 0) {
      from = this.length - 1 - Math.abs(fromIndex);
    }

    for (let i = from; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
