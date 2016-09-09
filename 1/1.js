/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length,
        before = {}
    for (var i=0;i<len;i++) {
        var num = nums[i],
            remain = target - num,
            index = before[remain]
        if (index !== undefined && index !== i) {
            return [index,i]
        }
        before[num] = i    
    }
    return []
};