'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback) {
    const mapped = [];
    for (let i = 0; i < this.length; i++) {
      mapped.push(callback(this[i]));
    }
    return mapped;
  };
}

module.exports = applyCustomMap;
