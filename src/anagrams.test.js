import { isAnagram } from './anagrams';
import { expect } from 'chai';

describe('isAnagram - basic functionality', () => {
  
  it('is a function', () => {
    const expected = 'function';
    const actual = typeof isAnagram;
    expect(actual).to.equal(expected);
  });
  
  it('takes two arguments', () => {
    const expected = 2;
    const actual = isAnagram.length;
    expect(actual).to.equal(expected);
  });

  it('returns true when passed two empty strings', () => {
    const expected = true;
    const actual = isAnagram('', '');
    expect(actual).to.equal(expected);
  });

  it('returns false when passed two totally unrelated strings', () => {
    const expected = false;
    const actual = isAnagram('a', 'b');
    expect(actual).to.equal(expected);
  });

  it('returns false if the arguments are different lengths', () => {
    const expected = false;
    const actual = isAnagram('a', 'aa');
    expect(actual).to.equal(expected);
  });

  it('ignores spaces and other characters', () => {
    const expected = true;
    const actual = isAnagram('conversation', 'voices rant on');
    expect(actual).to.equal(expected);
  });

  it('ignores case', () => {
    const expected = true;
    const actual = isAnagram('A', 'a');
    expect(actual).to.equal(expected);
  });

});

describe('isAnagram - test cases', () => {

  it('returns true when two known anagrams are passed in', () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns false when there are letters in one not in the other', () => {
    const expected = false;
    
    const actual = isAnagram('elbows', 'below');
    expect(actual).to.equal(expected);

    const actual2 = isAnagram('below', 'elbows');
    expect(actual2).to.equal(expected);
  });

  it('returns false when strings have the same letters in different quantities', () => {
    const expected = false;
    const actual = isAnagram('listens', 'silent');
    expect(actual).to.equal(expected);
  });

})

