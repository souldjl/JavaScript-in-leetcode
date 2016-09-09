### Remove Element

Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

### 思路

这道题其实很简单，只需要删除数组中与给定值相等的元素就行，函数返回新数组的长度，当然这道题给出了一个附加条件，那就是只能“原地”移除，不能创建新的数组空间，因此，很容易想到的方法就是 splice 方法。依次遍历这个数组，如果元素值与给定值相同，传递此时的索引值给 splice 方法第一个参数。   
当然此题要注意的是 随着每次删除元素，数组的长度是动态变化的，因此没必要用一个变量缓存数组的最初长度值。 很简单，直接看代码。