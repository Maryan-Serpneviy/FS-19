'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    if (this.length === 0) { return; }
    return this.splice(0, 1);
  };
}

module.exports = applyCustomShift;
