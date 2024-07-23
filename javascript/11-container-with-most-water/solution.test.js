
const maxArea = require('./solution.js');

describe('maxArea', () => {
    test('case 1', () => {
        const result = maxArea([1,8,6,2,5,4,8,3,7]);
        expect(result).toEqual(49);
    });
    test('case 2', () => {
        const result = maxArea([1,1]);
        expect(result).toEqual(1);
    });
});