'use strict';

const smashWords = require('./smashWords');

function getRandomInt(min, max) {
  return Math.floor(
    Math.random() * (Math.ceil(max) - Math.floor(min) + 1)
  ) + min;
}

const createSentence = length => {
  let count = 0;
  let sentence = '';

  while (count < length) {
    if (Math.random() < 0.15) {
      sentence += ' ';
      count++;
    } else {
      sentence += String.fromCharCode(getRandomInt(97, 122));
    }
  }

  return sentence.trim();
};

describe('smashWords', () => {
  it('Should return a string', () => {
    const result = smashWords(['a', 'b']);
    expect(result).toBe(String(result));
  });

  it('Should return correct sentence', () => {
    expect(smashWords(['I', 'love', 'JS!'])).toBe('I love JS!');
  });

  it('Should return empty string if array is empty', () => {
    expect(smashWords([])).toBe('');
  });

  it('Should correct smash random words', () => {
    for (let i = 0; i <= 10; i++) {
      const sentence = createSentence(i);

      expect(smashWords(sentence.split(' '))).toBe(sentence);
    }
  });
});
