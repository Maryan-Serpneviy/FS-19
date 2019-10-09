'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback, thisArg) {
    const m = [];
    for (let i = 0; i < this.length; i++) {
      m[i] = callback.call(thisArg, this[i], i, this);
    }
    return m;
  };
}

module.exports = applyCustomMap;
