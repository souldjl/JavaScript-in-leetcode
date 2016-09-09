### 问题描述

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

简单来说，给出一个数组和一个值，求解 数组中两个元素的和等于给出的值，返回这两个元素的索引

如给出 nums = [2,7,11,15] ,target = 9 返回 [0,1]


### 思路

这道题最简单的思路当然是 从第一个元素开始依次遍历，对于每一个值，再依次遍历后面的值，如果两个数的和为给定的值，则返回。但这个方法的时间复杂度为O(n2)，其实这道题还有更高效的方法，时间复杂度能降到O(n)。

转换一下思路就是: 之前的想法是 遍历每一个元素，在该元素后面的元素中查找，事实我们完全可以 遍历一个元素，在它的前面查找，因此这就需要我们把之前已经遍历的元素储存起来。

