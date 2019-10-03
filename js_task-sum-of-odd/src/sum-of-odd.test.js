'use strict';

const sum = require('./sum-of-odd');

test('Should work with small number', () => {
  expect(sum(2))
    .toBe(8);
});

test('Should work with medium number', () => {
  expect(sum(100))
    .toBe(1000000);
});

test('Should work with large number', () => {
  expect(sum(5621))
    .toBe(177599098061);
});

test(`Should return zero with negative numbers`, () => {
  expect(sum(-5))
    .toBe(0);
});
