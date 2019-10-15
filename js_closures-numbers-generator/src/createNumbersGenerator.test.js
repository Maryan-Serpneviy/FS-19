'use strict';

const createNumbersGenerator = require('./createNumbersGenerator');

const generator1 = createNumbersGenerator([1, 3]);
const generator2 = createNumbersGenerator([1, 3, 0, 2, 5], 2, 4);
const generator3 = createNumbersGenerator();

test('Should return first number from initial array', () => {
  expect(generator1())
    .toBe(1);
});

test('Should return next number from initial array', () => {
  expect(generator1())
    .toBe(3);
});

test('Should return undefined if numbers in the array is over', () => {
  expect(generator1())
    .toBe(undefined);
});

test('Should return first value in the range between min and max', () => {
  expect(generator2())
    .toBe(3);
});

test('Should return next value in the range between min and max', () => {
  expect(generator2())
    .toBe(2);
});

test('Should return undefined if numbers in the range'
  + '* between min and max are over', () => {
  expect(generator2())
    .toBe(undefined);
});

test('Should return undefined if the initial'
  + '* value is not passed', () => {
  expect(generator3())
    .toBe(undefined);
});
