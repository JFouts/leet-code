
const longestPalindrome = require('./solution.js');

describe('longestPalindrome', () => {
    test('case 1', () => {
        const result = longestPalindrome('babad');
        expect(result).toEqual('bab');
    });
    test('case 2', () => {
        const result = longestPalindrome('cbbd');
        expect(result).toEqual('bb');
    });
});