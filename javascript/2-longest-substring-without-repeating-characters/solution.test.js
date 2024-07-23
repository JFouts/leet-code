
const lengthOfLongestSubstring = require('./solution.js');

describe('lengthOfLongestSubstring', () => {
    test('case 1', () => {
        const result = lengthOfLongestSubstring('abcabcbb');
        expect(result).toEqual(3);
    });
    test('case 2', () => {
        const result = lengthOfLongestSubstring('bbbbb');
        expect(result).toEqual(1);
    });
    test('case 3', () => {
        const result = lengthOfLongestSubstring('pwwkew');
        expect(result).toEqual(3);
    });
});