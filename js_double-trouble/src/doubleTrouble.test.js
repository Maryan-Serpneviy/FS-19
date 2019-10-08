'use strict';

const doubleTrouble = require('./doubleTrouble');
const numbers = [2, 2, 2, 2, 2, 2];

test('doubleTrouble([1, 3, 5, 6, 7, 4, 3], 7)', () => {
  expect(doubleTrouble([1, 3, 5, 6, 7, 4, 3], 7))
    .toEqual([1, 3, 5, 6, 7, 4]);
});

test('doubleTrouble([4, 1, 1, 1, 4], 2)', () => {
  expect(doubleTrouble([4, 1, 1, 1, 4], 2))
    .toEqual([4, 1, 4]);
});

test('doubleTrouble([2, 2, 2, 2, 2, 2], 4)', () => {
  expect(doubleTrouble(numbers, 4))
    .toEqual([2]);
});

test('doubleTrouble([2, 6, 2], 8)', () => {
  expect(doubleTrouble([2, 6, 2], 8))
    .toEqual([2, 2]);
});

test('doubleTrouble([5, 3, 3, 5, 5, 4, 5], 7)', () => {
  expect(doubleTrouble([5, 3, 3, 5, 5, 4, 5], 7))
    .toEqual([5, 3, 3, 5, 5, 4, 5]);
});

test('doubleTrouble([3, 7, 3, 9], 8)', () => {
  expect(doubleTrouble([3, 7, 3, 9], 8))
    .toEqual([3, 7, 3, 9]);
});

test(
  `doubleTrouble(
  [6, 4, 9, 6, 4, 5, 2, 2, 9, 6, 4, 1, 9, 8, 7, 7, 5, 2, 5, 6, 3, 2, 9, 5, 9, 7,
   4, 3, 2], 9)`, () => {
    expect(doubleTrouble(
      [6, 4, 9, 6, 4, 5, 2, 2, 9, 6, 4, 1, 9, 8, 7, 7, 5, 2, 5, 6, 3, 2,
        9, 5, 9, 7, 4, 3, 2], 9))
      .toEqual([6, 4, 9, 6, 4, 2, 2, 9, 6, 4, 1, 9, 8, 7, 7, 5, 2, 5, 6, 2, 9,
        5, 9, 7, 4, 3, 2]);
  });

test('original array is not changed', () => {
  expect(numbers)
    .toEqual([2, 2, 2, 2, 2, 2]);
});
