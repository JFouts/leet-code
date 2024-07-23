
const convert = require('./solution.js');

describe('convert', () => {
    test('case 1', () => {
        const result = convert('PAYPALISHIRING', 3);
        expect(result).toEqual('PAHNAPLSIIGYIR');
    });
    test('case 2', () => {
        const result = convert('PAYPALISHIRING', 4);
        expect(result).toEqual('PINALSIGYAHRPI');
    });
    test('case 3', () => {
        const result = convert('A', 1);
        expect(result).toEqual('A');
    });
});