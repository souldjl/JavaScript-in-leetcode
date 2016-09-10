### Length of Last Word

Given a string s consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

### 思路

很简单的一道题，一个字符串由大写字母，小写字母，和空格组成，求出最后一个单词的长度，如果不存在最后一个单词，则返回`0`

首先 对整个字符串`trim`一下，去掉首尾的空格，之后使用字符串的`split(' ')`方法，将各个单词分出，得到一个数组，对最后一个数组元素使用`trim`方法，去掉最后一个单词首尾的空格。很简单的一道题