'use strict';

const applyCustomSort = require('./arrayMethodSort');

applyCustomSort();

test('sort2 is added to [].__proto__', () => {
  expect([].sort2)
    .toBeInstanceOf(Function);
});

test(`sort2 doesn't call default sort`, () => {
  expect([].sort2.toString().includes('.sort('))
    .toBe(false);
});

test('sort returns new array', () => {
  const source = [3, 12, 2, 11];
  const result = source.sort2();
  expect(source)
    .toEqual([3, 12, 2, 11]);
  expect(result)
    .toEqual([2, 3, 11, 12]);
});

test('the array is sorted', () => {
  const source = [3, 12, 2, 11];
  const result = source.sort2();
  expect(source)
    .toEqual([3, 12, 2, 11]);
  expect(result)
    .toEqual([2, 3, 11, 12]);
});

test('numbers are sorted as numbers by default: [3, 12, 2, 11].sort2()', () => {
  const source = [3, 12, 2, 11];
  const result = source.sort2();
  expect(source)
    .toEqual([3, 12, 2, 11]);
  expect(result)
    .toEqual([2, 3, 11, 12]);
});

test(`sort strings: ['c','b','a','d'].sort2()`, () => {
  expect(['c', 'b', 'a', 'd'].sort2())
    .toEqual(['a', 'b', 'c', 'd']);
});

test(`sort cyrillic letters: ['ёж','як','аист'].sort2()`, () => {
  expect(['ёж', 'як', 'аист'].sort2())
    .toEqual(['аист', 'як', 'ёж']);
});

test('custom compare function, numbers: [3, 12, 2, 11].sort2((a, b) => a - b)',
  () => {
    expect([3, 12, 2, 11].sort2((a, b) => a - b))
      .toEqual([2, 3, 11, 12]);
  });

// test(
//   `custom compare function, strings:
//   ['ёж','як','аист'].sort2((a, b) => a.localeCompare(b))`, () => {
//     expect(['ёж', 'як', 'аист'].sort2((a, b) => a.localeCompare(b)))
//       .toEqual(['аист', 'ёж', 'як']);
//   });
