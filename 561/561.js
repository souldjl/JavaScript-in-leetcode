/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums = nums.sort((a, b) => a - b)
  var len = nums.length
  var sum = 0
  for (var i = 0; i < len; i = i + 2) {
    sum += nums[i]
  }
  return sum
}
