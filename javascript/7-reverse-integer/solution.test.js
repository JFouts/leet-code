
const reverse = require('./solution.js');

describe('reverse', () => {
    test('case 1', () => {
        const result = reverse(123);
        expect(result).toEqual(321);
    });
    test('case 2', () => {
        const result = reverse(-123);
        expect(result).toEqual(-321);
    });
    test('case 3', () => {
        const result = reverse(120);
        expect(result).toEqual(21);
    });
});