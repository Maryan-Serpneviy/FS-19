'use strict';

const createAdder = require('./createAdder');

const adder1 = createAdder();
const adder2 = createAdder(100);

test('Should return 0 by default', () => {
  expect(adder1())
    .toBe(0);
});

test('Should return sum of default\n'
  + ' * value and passed argument', () => {
  expect(adder1(10))
    .toBe(10);
});

test('Should return sum of previous\n'
  + ' * result and all passed arguments', () => {
  expect(adder1(10, 20, 100))
    .toBe(140);
});

test('Should return passed initial value', () => {
  expect(adder2())
    .toBe(100);
});

test('Should return sum of\n'
  + ' * initial value and passed argument', () => {
  expect(adder2(10))
    .toBe(110);
});

test('Should return sum of previous\n'
  + ' * result and all passed arguments', () => {
  expect(adder2(10, 20, 30))
    .toBe(170);
});

test('Should return previous result', () => {
  expect(adder2())
    .toBe(170);
});
