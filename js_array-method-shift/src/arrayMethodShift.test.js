'use strict';

const applyCustomShift = require('./arrayMethodShift');
applyCustomShift();

test('`shift2` is added to [].__proto__', () => {
  expect([].shift2)
    .toBeInstanceOf(Function);
});

test(`shift2 doesn't call default shift`, () => {
  expect([].shift2.toString().includes('.shift('))
    .toBe(false);
});

test('Shift from empty array', () => {
  const source = [];
  const result = source.shift2();
  expect(source)
    .toEqual([]);
  expect(result)
    .toBe(undefined);
});
