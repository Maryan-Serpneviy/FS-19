'use strict';

/**
 * Implement method indexOf
 *
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    for (let i = 0; i < this.length; i++) {
      if (searchElement === this[i]) {
        if (i < fromIndex) { return -1; }
        return i;
      }
    }
    return -1;
  };
}

module.exports = applyCustomIndexOf;
