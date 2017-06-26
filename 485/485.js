/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function(nums) {
    var count = 0
    var max = 0
    for (var num of nums) {
        if (num === 1) {
            count++
            max = Math.max(count, max)
        } else {
            count = 0
        }
    }
    return max
};
