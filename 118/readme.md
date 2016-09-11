###  Pascal's Triangle

Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

```javascript
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

### 思路

题意是 给出一个正整数，返回一个帕斯卡三角形。看给出的例子就很容易发现如下规律

1. 每行的首尾都是1
2. 从第三行开始，除去首尾两端，中间的数都等于它“两肩”的和。

理解了题意之后就很简单了，先判断给出的数，如果小于1，返回一个空数组，等于1，返回 `[ [1] ]`。等于2，返回 `[ [1],[1,1]]`。从第三行开始，则开始运用第二条规律。