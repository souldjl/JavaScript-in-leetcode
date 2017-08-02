/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var obj={},result=[]
    for (var i=0,len=nums.length;i<len;i++){
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    for (var key in obj) {
        if (obj[key] > Math.floor(nums.length/3)){
            result.push(Number(key))
        } 
    }
    return result
}