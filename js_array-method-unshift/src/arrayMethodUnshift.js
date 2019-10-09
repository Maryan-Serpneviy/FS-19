'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // 1. increase arr length
    this.length += elements.length;
    // 2. shift elements
    for (const i of this) {
      this[this.length - i - 1] = this[this.length - i - 1 - elements.length];
    }
    // 3. paste new elements
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
