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
    var MAX_CARRY = 1;
    if (l1 !== null && l2 !== null) {
        l1.val = (l1.val + l2.val);
        if (l1.val >= 10) {
        if (l1.next === null && l2.next !== null) {
            l1.next = new ListNode(1, null);
        } else if (l2.next !== null && l1.next !== null) {
            l1.next.val += MAX_CARRY;
        } else if (l2.next === null && l1.next !== null) {
            l2.next = new ListNode(1, null);
        } else if (l1.next === null && l2.next === null) {
            l1.next = new ListNode(1, null);
        }
    } else {
        if (l1.next === null && l2.next !== null) {
            l1.next = new ListNode(0, null);
        }
        if (l2.next === null && l1.next !== null) {
            l2.next = new ListNode(0, null);
        }
    }
    l1.val = l1.val % 10;
    addTwoNumbers(l1.next, l2.next);
    }
    return l1;
    }
