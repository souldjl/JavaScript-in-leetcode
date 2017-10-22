/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var len = nums.length
    var hash = {}
    var min = Infinity
    var degree = 0
    for (var i=0;i<len;i++) {
        var num = nums[i]
        if (!hash[num]) hash[num] = []
        hash[num].push(i)
    }
    degree = Math.max(...Object.values(hash).map(v => v.length))
    Object.values(hash).forEach(v=> {
        if (v.length === degree) {
            if ((v[v.length - 1] - v[0] + 1) < min) {
                min = v[v.length - 1] - v[0] + 1
            }
        }
    })
    return min
};

console.log(findShortestSubArray([]))