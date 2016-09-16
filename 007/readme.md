### Reverse Integer

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321


### 思路

考虑两种情况 传入的 x 是正数，和 x 是负数  

当 x 为正数时，做两次判断，如果两次判断中有一个大于 MAX 就返回0  

至于其他的处理， 比如除去末位的0 或翻转都很简单。