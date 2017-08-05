/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return Array.from(new Set(nums)).length !== nums.length
}