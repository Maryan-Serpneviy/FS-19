'use strict';

const detectPangram = require('./detect-pangram');

test('Should return false for non pangram phrase', () => {
  expect(detectPangram('Detect Pangram'))
    .toBe(false);
});

test('Should return false for empty phrase', () => {
  expect(detectPangram(''))
    .toBe(false);
});

test('Should return true for pangram phrase', () => {
  expect(detectPangram('abcdefghijklmnopqrstuvwxyz'))
    .toBe(true);
});

test(
  'Should return true for pangram with numbers and punctuation', () => {
    expect(detectPangram('How quickly daft jumping 34 zebras vex?'))
      .toBe(true);
  });

test(
  'Should return true for pangram with upper and lower case letters', () => {
    expect(detectPangram('ABCD45efGH,IJK,lmNOPQR56STUVW3XYZ'))
      .toBe(true);
  });
