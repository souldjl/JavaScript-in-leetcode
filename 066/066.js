/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length
	digits[len-1]++
	for (var i = len-1;i>0;i--) {
		if (digits[i] === 10) {
			digits[i] = 0
			digits[i-1]++
		}
	}
	if (digits[0] === 10) {
		digits[0] = 0
		digits.unshift(1)
	}
	return digits  
};