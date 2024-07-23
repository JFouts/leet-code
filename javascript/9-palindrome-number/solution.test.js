
const isPalindrome = require('./solution.js');

describe('isPalindrome', () => {
    test('case 1', () => {
        const result = isPalindrome(121);
        expect(result).toEqual(true);
    });
    test('case 2', () => {
        const result = isPalindrome(-121);
        expect(result).toEqual(false);
    });
    test('case 3', () => {
        const result = isPalindrome(10);
        expect(result).toEqual(false);
    });
});