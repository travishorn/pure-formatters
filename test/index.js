const assert = require('assert');
const pf = require('../');

describe('pureFormatters', () => {
  describe('#lowerCase()', () => {
    it('should return a string with all lower case characters', () => {
      assert.equal(pf.lowerCase('Hello World'), 'hello world');
    });
  });

  describe('#upperCase()', () => {
    it('should return a string with all upper case characters', () => {
      assert.equal(pf.upperCase('hello world'), 'HELLO WORLD');
    });
  });

  describe('#usd()', () => {
    it('should return a string formatted as USD from a dollar amount number', () => {
      assert.equal(pf.usd(1.5), '$1.50');
    });

    it('should return a string formatted as USD from a cents amount number', () => {
      assert.equal(pf.usd(150, 'c'), '$1.50');
    });

    it('should return a string formatted as USD from a dollar amount string', () => {
      assert.equal(pf.usd('1.5'), '$1.50');
    });

    it('should return a string formatted as USD from a cents amount string', () => {
      assert.equal(pf.usd('150', 'c'), '$1.50');
    });

    it('should return a string formatted as USD with many decimal places', () => {
      assert.equal(pf.usd(1.49623456789), '$1.50');
    });
  });
});
