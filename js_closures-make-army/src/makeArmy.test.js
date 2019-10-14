'use strict';

const makeArmy = require('./makeArmy');

test('Army of two', () => {
  const shooters = makeArmy(2);
  expect(shooters[0]())
    .toBe(0);
  expect(shooters[1]())
    .toBe(1);
});

test('Twelve shooters army', () => {
  const shooters = makeArmy(12);
  expect(shooters[0]())
    .toBe(0);
  expect(shooters[1]())
    .toBe(1);
  expect(shooters[6]())
    .toBe(6);
  expect(shooters[11]())
    .toBe(11);
});

test('The legion', () => {
  const shooters = makeArmy(1000);
  expect(shooters[0]())
    .toBe(0);
  expect(shooters[1]())
    .toBe(1);
  expect(shooters[999]())
    .toBe(999);
});
