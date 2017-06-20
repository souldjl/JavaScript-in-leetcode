/**
 * @param {number[]} nums
 * @return {number}
 */

function unique(arr) {
    return Array.from(new Set(arr))
}
var thirdMax = function (nums) {
    if (!Array.isArray(nums)) return
    nums = unique(nums)
    var len = nums.length
    var sortedNums = nums.slice(0, 3).sort((a, b) => b - a)

    if (len <= 3) {
        return sortedNums[2] === undefined ? sortedNums[0] : sortedNums[2]
    }

    var restNums = nums.slice(3)

    for (let i = 0; i < restNums.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (restNums[i] > sortedNums[j]) {
                sortedNums.splice(j, 0, restNums[i])
                if (sortedNums.length > 3) sortedNums.length = 3
                break
            }
            if (sortedNums.length < 3) sortedNums.push(restNums[i])

        }
    }
    return sortedNums[2]
};