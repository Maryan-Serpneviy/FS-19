'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compareFn = compareFunction;
    // Split the array into halves and merge them recursively
    return mergeSort(this);
    function mergeSort(arr) {
      // return once we hit an array with a single item
      if (arr.length === 1) { return arr; }
      // get the middle item of the array rounded down
      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle); // items on the left side
      const right = arr.slice(middle); // items on the right side
      return merge(mergeSort(left), mergeSort(right));
    }
    // compare the arrays item by item and return the concatenated result
    function merge(left, right) {
      const result = [];
      let indexLeft = 0;
      let indexRight = 0;
      while (indexLeft < left.length && indexRight < right.length) {
        const _left = left[indexLeft];
        const _right = right[indexRight];
        if (compareFn) {
          compareFn = composeCompareFn(compareFn(left, right));
        }
        compareFn = (l, r) => l < r;
        if (compareFn(_left, _right)) {
          result.push(left[indexLeft]);
          indexLeft++;
        } else {
          result.push(right[indexRight]);
          indexRight++;
        }
      }
      return result.concat(left.slice(indexLeft))
        .concat(right.slice(indexRight));
    }

    function composeCompareFn(compareResult) {
      if (Math.sign(compareResult) === -1) { return false; }
      if (Math.sign(compareResult) === 1) { return true; }
      if (compareResult === 0) { return false; }
    }
  };
}

module.exports = applyCustomSort;
