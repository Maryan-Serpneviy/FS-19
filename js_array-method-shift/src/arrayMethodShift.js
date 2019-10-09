'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length > 0) {
      delete this[0];
      for (const i of this) {
        this[i] = this[i + 1];
      }
      this.length--;
    }
  };
}

module.exports = applyCustomShift;
