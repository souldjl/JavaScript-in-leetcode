/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) return null
    var flag = true
    var current = head
    while(current.next) {
        if (flag === true) {
            var tmp
            tmp = current.next.val
            current.next.val = current.val
            current.val = tmp
        }
        flag = !flag
        current = current.next
    }
    return head
};