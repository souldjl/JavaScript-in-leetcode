/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var hash = {}
    var result = []
    for (var i=0;i<nums.length;i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]] +=1
        }
    }
    for (var key in hash) {
        if (hash[key] > 1) {
            result.push(Number(key))
        }
    }
    return result
};