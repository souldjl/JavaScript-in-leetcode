### Remove Duplicates from Sorted Array

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = `[1,1,2]`,

Your function should return length =` 2`, with the first two elements of nums being `1` and `2` respectively. It doesn't matter what you leave beyond the new length.

### 思路

题目很简单，唯一的条件的是 只能在 原地(in-place)操作

由于已经排好序了，因此一次遍历即可，如果当前的数和下一个数相等，那么删除这个数，再判断下一个数，很简单，直接看代码就能懂。