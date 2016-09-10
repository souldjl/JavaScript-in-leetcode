/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    function getNum(char) {
        switch(char) {
            case "M" : return 1000
            case "D" : return 500
            case "C" : return 100
            case "L" : return 50
            case "X" : return 10
            case "V" : return 5
            case "I" : return 1
            default : return 0
        }
    }
    var sum = 0,
        len = s.length,
        nums = []
    for (var i=0;i<len;i++) {
        nums.push(getNum(s.charAt(i)))
    }
    for (var i=0;i<len-1;i++) {
        if (nums[i] < nums[i+1]) {
            nums[i] *= -1
        }
        sum += nums[i]
    }
    sum += nums[len - 1]
    return sum
};