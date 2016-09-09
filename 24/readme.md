### Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

### 思路

此题的大致意思是，每两个节点之间交换它们之间的值   
链表的题目 最习惯的思路当然就是 沿着链依次遍历 此题 每两个节点之间才交换一次位置 那么怎么来判断是隔了两个节点呢？ 最简单的方法是设置一个 flag 值，比如 flag = true ,每经过一个节点，flag改变一次，当然，每隔两次（两个节点），flag 就会变成true，因此思路整个就打开了，剩下的只是交换节点的值和判断节点非空。看代码吧。