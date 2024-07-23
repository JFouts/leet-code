/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let n1 = l1;
    let n2 = l2;

    let o = null;
    let oPrev = null;
    let carry = 0;
    let root = null;

    while(n1 || n2) {
        const v1 = n1 ? n1.val : 0;
        const v2 = n2 ? n2.val : 0;
        let sum = v1 + v2 + carry;

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        o = new ListNode(sum);
        if (oPrev) {
            oPrev.next = o;
        }

        n1 = n1 ? n1.next : null;
        n2 = n2 ? n2.next : null;

        oPrev = o;

        if (!root) {
            root = o;
        }
    }

    if (carry > 0) {
        o = new ListNode(carry);
        oPrev.next = o;
    }

    return root;
};

module.exports = addTwoNumbers;