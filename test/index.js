const assert = require('assert');
const pf = require('../');

describe('pureFormatters', () => {
  describe('#upperCase()', () => {
    it('should return a string with all upper case characters', () => {
      assert.equal(pf.upperCase('hello world'), 'HELLO WORLD');
    });
  });

  describe('#lowerCase()', () => {
    it('should return a string with all lower case characters', () => {
      assert.equal(pf.lowerCase('Hello World'), 'hello world');
    });
  });
});
