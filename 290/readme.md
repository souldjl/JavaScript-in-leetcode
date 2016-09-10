### Word Pattern

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:

	1. pattern = `"abba"`, str = `"dog cat cat dog"` should return true.
	2. pattern = `"abba"`, str = `"dog cat cat fish"` should return false.
	3. pattern = `"aaaa"`, str = `"dog cat cat dog"` should return false.
	4. pattern = `"abba"`, str = `"dog dog dog dog"` should return false.



### 思路

大致题意就是 根据给出的 `pattern` 来判断 给定的字符串与 `pattern`是否符合，如果 `pattern` 中某些位置中字符相同，那么在 `str`中相对应的位置中，单词之间也必须相同。

大致思路就是，依次遍历`pattern`中的各个字母，以 该字母为键值，`str`中相同位置的单词作为键。当往后遍历`pattern`时，每次在`obj`中检索对应字母的键值对是否存在，如果不存在则添加进`obj`，如果存在，则检查 `str`中相对应位置的值是否等于之前已经储存的值，直到`pattern`全部检索完毕。
