/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var index = nums.indexOf(target)
    var len = nums.length
    
    if (index > -1) return index
    if (target < nums[0]) return 0
    
    for (var i=1;i<len;i++) {
        if (nums[i-1] < target && nums[i] > target) return i
    }
    return len
}