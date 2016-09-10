/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) return null
    var current = head,
        count = 0
    while (current) {
        count++
        current = current.next
    }
    // count 为结点总个数
    // 要删除的位数 （比如一共100个结点，倒数第3个 实际上是正着数第98个）
    var delIndex = count-n + 1
    // count 如果等于n,实际上删除的是第一个结点
    if (delIndex === 1) return head.next
    // 重置 current 和 head
    current = head
    count = 0
    while (current) {
        count++
        if (count === delIndex - 1) {
            current.next = current.next.next
            return head
        }
        current = current.next
    }
};