'use strict';

const generateZeroFunction = require('./generateZeroFunction');

test('First call returns function', () => {
  expect(generateZeroFunction())
    .toBeInstanceOf(Function);
});

test('Second call returns zero', () => {
  const getZero = generateZeroFunction();
  expect(getZero())
    .toBe(0);
});
