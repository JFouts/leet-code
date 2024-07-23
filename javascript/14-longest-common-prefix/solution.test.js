
const longestCommonPrefix = require('./solution.js');

describe('longestCommonPrefix', () => {
    test('case 1', () => {
        const result = longestCommonPrefix(["flower","flow","flight"]);
        expect(result).toEqual("fl");
    });
    test('case 2', () => {
        const result = longestCommonPrefix(["dog","racecar","car"]);
        expect(result).toEqual("");
    });
});