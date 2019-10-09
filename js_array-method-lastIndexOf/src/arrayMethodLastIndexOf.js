'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex) {
    let lastIndex;
    if (fromIndex < 0) {
      for (let i = this.length - 1 - Math.abs(fromIndex); i > 0; i--) {
        if (searchElement === this[i]) {
          lastIndex = i;
        }
      }
    }
    for (let i = 0; i < this.length; i++) {
      if (searchElement === this[i]) {
        lastIndex = i;
      }
    }
    return lastIndex || -1;
  };
}

module.exports = applyCustomLastIndexOf;
