### Plus One

Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.

### 思路

给出一个数组，数组中每一个元素代表一个整数的位数，给这个数加一，返回新的一个整数，结果仍然以数组形式呈现

其实这题不用想太复杂，很简单，最后一位加1 ，然后依次判断，逢 10 进 1。如果到第一位还是10，那么就要增加一位1。