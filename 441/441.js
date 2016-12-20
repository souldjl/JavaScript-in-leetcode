/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
   var result = Math.floor(Math.sqrt(2*n))
   return result * (result + 1) <= 2*n ? result : result - 1
};