/**
 * @param {number[]} nums
 * @return {number}
 */
function product(arr) {
    return arr.reduce((prev, curr) => prev * curr, 1)
}
var maximumProduct = function(nums) {
    if (nums.length === 3) return product(nums)
    nums = nums.sort((a,b) => a - b)
    var positive = nums.filter(value => value > 0)
    var negative = nums.filter(value => value < 0)

    if (negative.length < 2) {
        return product(nums.slice(-3))
    } else {
        return Math.max(product(negative.slice(0,2).concat(nums.slice(-1))), product(nums.slice(-3)))
    }
};

console.log(maximumProduct([-1,-2,-3,1,2,3]))