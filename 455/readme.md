### Assign Cookies

Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

**Note:**
You may assume the greed factor is always positive. 
You cannot assign more than one cookie to one child.

**Example 1:**

```
Input: [1,2,3], [1,1]

Output: 1

Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.
```

**Example 2:**

```
Input: [1,2], [1,2,3]

Output: 2

Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2.
```

### 思路

题目挺长的，但是看懂题目还是挺简单的。

函数接受两个参数，一个为 children 的 贪婪指数数组，表示 每个孩子需要多大的 cookie 饼干才能满意。 第二个参数为 cookie 的 size 大小指数，表示每个 cookie 的大小。

由于 每个孩子只能最多拿一块饼干，所以题目的意思变成了：

> s数组中的数 大于等于 g 数组中的数 的个数

因此思路如下，先将两个数组排序，遍历 s 数组，如果满足条件（即是s[i]大于等于p[j]）,再比较 s 数组中的下一个数和 g 数组中的下一个数，否则比较 s 数组中的向后移动一位。其实想想 类似于 **原地归并排序**。

当然这里有一个坑就是 ： 数组的 sort 方法默认是会调用 toString 方法，将每个元素变成一个字符串再进行排序。

```
[1,4,12,6].sort() // [1,12,4,6]
```

因此这里应该传入一个自定义的 compare 函数。

