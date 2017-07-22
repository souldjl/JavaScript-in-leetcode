/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var hash = {};
  var num = 0;
  var single_flag = false;
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    if (hash[char]) {
      hash[char]++;
    } else {
      hash[char] = 1;
    }
  }
  for (var key in hash) {
    if (hash[key] % 2 === 0) {
      num += hash[key];
    } else {
      num += hash[key] - 1;
      single_flag = true;
    }
  }
  return num + Number(single_flag);
};
