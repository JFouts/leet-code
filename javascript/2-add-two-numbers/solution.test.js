
global.ListNode = function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const addTwoNumbers = require('./solution.js');

function listNodeToArray(node) {
    const output = [];
    while (node) {
        output.push(node.val);
        node = node.next;
    }
    return output;
}

function arrayToListNode(array) {
    let prev = null;
    for (let item of array.reverse()) {
        prev = new ListNode(item, prev);
    }
    return prev;
}

describe('addTwoNumbers', () => {
    test('case 1', () => {
        const result = addTwoNumbers(arrayToListNode([2, 4, 3]), arrayToListNode([5, 6, 4]));
        expect(listNodeToArray(result)).toEqual([7, 0, 8]);
    });
    test('case 2', () => {
        const result = addTwoNumbers(arrayToListNode([0]), arrayToListNode([0]));
        expect(listNodeToArray(result)).toEqual([0]);
    });
    test('case 3', () => {
        const result = addTwoNumbers(arrayToListNode([9, 9, 9, 9, 9, 9, 9]), arrayToListNode([9, 9, 9, 9]));
        expect(listNodeToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
});