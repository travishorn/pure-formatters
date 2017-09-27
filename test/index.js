const assert = require('assert');
const pf = require('../');

describe('pureFormatters', () => {
  describe('#displayNull()', () => {
    it('should return \'null\' on an empty value', () => {
      assert.equal(pf.displayNull(''), 'null');
    });

    it('should return \'null\' on a null value', () => {
      assert.equal(pf.displayNull(null), 'null');
    });

    it('should return the value on a boolean', () => {
      assert.equal(pf.displayNull(true), true);
      assert.equal(pf.displayNull(false), false);
    });

    it('should return the value on a number', () => {
      assert.equal(pf.displayNull(150), 150);
    });

    it('should return the value on a string', () => {
      assert.equal(pf.displayNull('Hello World'), 'Hello World');
    });

    it('should return undefined on an undefined value', () => {
      assert.equal(pf.displayNull(undefined), undefined);
    });

    it('should return a custom string defined by second argument', () => {
      assert.equal(pf.displayNull('', 'empty'), 'empty');
    });
  });

  describe('#lowerCase()', () => {
    it('should return a string with all lower case characters', () => {
      assert.equal(pf.lowerCase('Hello World'), 'hello world');
    });
  });

  describe('#sentenceList', () => {
    it('should return a string on a single array element', () => {
      assert.equal(pf.sentenceList(['Bettye Norton']), 'Bettye Norton');
    });

    it('should return a string combining two array elements with "and"', () => {
      assert.equal(
        pf.sentenceList(['Bettye Norton', 'Melisa Reed']),
        'Bettye Norton and Melisa Reed'
      );
    });

    it('should return a string combining three+ array elements with commas and "and"', () => {
      assert.equal(
        pf.sentenceList(['Bettye Norton', 'Melisa Reed', 'Kari Osborne']),
        'Bettye Norton, Melisa Reed, and Kari Osborne'
      );
    });

    it('should return a string combining array of objects on a key', () => {
      assert.equal(
        pf.sentenceList([
          { name: 'Bettye Norton' },
          { name: 'Melisa Reed' },
          { name: 'Kari Osborne' },
        ], 'name'),
        'Bettye Norton, Melisa Reed, and Kari Osborne'
      );
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
