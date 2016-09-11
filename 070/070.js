/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1 ) return 1
    if (n == 2 ) return 2
    var a =1,b=2 ,tmp
    while( n > 2 && n--) {
    	tmp = a
    	a = b
    	b = b + tmp

    }
    return b
};

