'use strict';

const toHex = require('./toHex');

test(`Should return hexadecimal number string`, () => {
  expect(toHex(42).toLowerCase())
    .toBe('2a');
});

test(`Should return zero`, () => {
  expect(toHex(0).toLowerCase())
    .toBe('0');
});
