'use strict';

const invertColor = require('./invertColor');

test('should convert black to white', () => {
  expect(invertColor('#000000').toUpperCase())
    .toBe('#FFFFFF');
});

test('should add leading 0s', () => {
  expect(invertColor('#FFFFFF').toUpperCase())
    .toBe('#000000');
});

test('should work case insensitive', () => {
  expect(invertColor('#fedcba').toUpperCase())
    .toBe('#012345');
});

test('double inversion should give the original color', () => {
  const color = '#67890F';
  const inverted = invertColor(color);
  expect(invertColor(inverted).toUpperCase())
    .toBe(color);
});
