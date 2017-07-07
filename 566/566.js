/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var flatten = nums.reduce((prev, curr) => prev.concat(curr), [])
    var result = []
    if (flatten.length !== r * c) return nums
    for (var i=0; i<r;i++) {
        result.push(flatten.slice(i*c, (i+1)*c))
    }
    return result
};