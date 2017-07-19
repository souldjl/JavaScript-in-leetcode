/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var len = findNums.length
    var max = Math.max(...nums)
    var result = []
    var found = false
    var last = nums[nums.length - 1]
    for (var i=0;i<len;i++) {
        var num =  findNums[i]
       if (num === max || num === last) {
           result.push(-1)
       } else {
           var index = nums.indexOf(num)
           for (var j = index + 1;j<nums.length;j++) {
               if (nums[j] > num) {
                   result.push(nums[j])
                   found = true
                   break
               }
           }
           if (!found) {
               result.push(-1)
           }
           found = false
       }
    }
    return result
};