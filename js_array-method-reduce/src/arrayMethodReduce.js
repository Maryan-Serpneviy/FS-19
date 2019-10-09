'use strict';

/**
 * Implement method Reduce
 */
function applyCustomReduce() {
  [].__proto__.reduce2 = function(callback, initialValue) {
    let accumulator;
    let firstIndex;

    if (arguments.length === 1) {
      accumulator = this[0];
      firstIndex = 1;
    } else {
      accumulator = initialValue;
      firstIndex = 0;
    }

    for (let i = firstIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i);
    }
    return accumulator;
  };
}

module.exports = applyCustomReduce;
