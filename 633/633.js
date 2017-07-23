/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for (var i=0; i<= Math.sqrt(c); i++) {
        return Math.sqrt(c - i * i) === ~~Math.sqrt(c - i * i)
    }
    return false
}