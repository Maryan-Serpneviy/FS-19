'use strict';

const basicOp = require('./basicOp');

test('The division operator should work', () => {
  expect(basicOp('/', 49, 7))
    .toBe(7);
});

test('The multiply operator should work', () => {
  expect(basicOp('*', 5, 5))
    .toBe(25);
});

test('The plus operator should work', () => {
  expect(basicOp('+', 4, 7))
    .toBe(11);
});

test('The minus operator should work', () => {
  expect(basicOp('-', 15, 18))
    .toBe(-3);
});

test('Should return 0 for non-math operations', () => {
  expect(basicOp('hello', 1, 18))
    .toBe(0);
});
