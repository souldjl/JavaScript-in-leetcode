/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt(num.toString(2).replace(/[01]/g,v => 1 - Number(v)), 2)
}
