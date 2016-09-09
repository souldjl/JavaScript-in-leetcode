### Remove Nth Node From End of List

Given a linked list, remove the nth node from the end of list and return its head.

For example,

		Given linked list: 1->2->3->4->5, and n = 2.

   		After removing the second node from the end, the linked list becomes 1->2->3->5.


### 思路

由于是删除倒数第 n 个元素，但 链表的结点只有 next 属性，而没有 prev 属性，所以一次从链表头遍历到链表尾时，由于不知道链表的结点个数，因此我们也不知道应该在哪个点来删除，因此 我们首先需要知道结点的总个数，于是我们首先遍历一遍链表，得到结点的总个数，这样我们就知道了应该在第几号位上来删除结点。剩下删除结点的部分就很简单了，看代码就能懂。