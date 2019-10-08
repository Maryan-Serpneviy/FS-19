'use strict';

const capitalsFirst = require('./capitalsFirst');

test('Should work when multiple words capitalized', () => {
  expect(capitalsFirst('hey You, Sort me Already!'))
    .toBe('You, Sort Already! hey me');
});

test('Should work when one word capitalized', () => {
  expect(capitalsFirst('life gets pretty Sometimes'))
    .toBe('Sometimes life gets pretty');
});

test('Should skip a word if it starts with a number', () => {
  expect(capitalsFirst('Av3p P=qup fjn act 8+g yjznb eb wy'))
    .toBe('Av3p P=qup fjn act yjznb eb wy');
});

test('Should skip a word if it starts with a special characters', () => {
  expect(capitalsFirst('=xupi1 Vmoba Pq &fa asf ?fak(wq .fas abt &uanu'))
    .toBe('Vmoba Pq asf abt');
});

test('Should work when none of the words are capitalized', () => {
  expect(capitalsFirst('cdk z3v 6aw zlh 6gur3'))
    .toBe('cdk z3v zlh');
});

test('Should work when all words are capitalized', () => {
  expect(capitalsFirst('Ahljf W0z9f F@p W3scd 9axp@o $jiad8'))
    .toBe('Ahljf W0z9f F@p W3scd');
});
