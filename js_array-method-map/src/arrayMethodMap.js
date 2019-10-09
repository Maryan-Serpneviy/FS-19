'use strict';

/**
 * Implement method Map
 */
function applyCustomMap() {
  [].__proto__.map2 = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    let T, k;

    const O = Object(this);

    // Нехай len дорівнює ToUint32(lenValue).
    const len = O.length >>> 0;

    if (arguments.length > 1) {
      T = thisArg;
    }

    const A = new Array(len);
    k = 0;

    while (k < len) {
      let kValue, mappedValue;
      if (k in O) {
        // і. Нехай kValue дорівнює результату виклику внутрішнього методу O
        //    Get з аргументом k.
        kValue = O[k];

        // ii. Нехай mappedValue дорівнює результату виклику внутрішнього
        //     методу callback Call з T у якості значення this та списком
        //     аргументів, що містить kValue, k та O.
        mappedValue = callback.call(T, kValue, k, O);

        A[k] = mappedValue;
      }
      k++;
    }
    return A;
  };
}

module.exports = applyCustomMap;
