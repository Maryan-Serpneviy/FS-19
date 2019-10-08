'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    Array.prototype.splice.call(arguments, 0, 0, 0, 0);
    Array.prototype.splice.apply(this, arguments);
    return this.length;
  };
}

module.exports = applyCustomUnshift;
