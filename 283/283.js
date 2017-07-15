/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var startLen = nums.length
    for (var i=0;i<nums.length;i++) {
        if (nums[i] === 0) {
            nums.splice(i,1)
            i--
        }
    }
    var endLen = nums.length
    var zeroLen = startLen - endLen
    nums.concat(new Array(zeroLen).fill(0))
};

console.log(moveZeroes([0, 0, 1]))