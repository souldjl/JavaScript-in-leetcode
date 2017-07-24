/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var hash = {}
    var len = nums.length
    var result = []
    for (var i=0;i<len;i++) {
        hash[i+1] = 1
    }
    for (var i=0;i<len;i++) {
        hash[nums[i]] = 0
    }
    for (var key in hash) {
        if (hash[key]) {
            result.push(Number(key))
        }
    }
    return result
}