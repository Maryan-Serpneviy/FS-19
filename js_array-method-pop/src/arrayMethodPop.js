'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length > 0) {
      const item = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return item;
    }
  };
}

module.exports = applyCustomPop;
