/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num < 0) return false
    var sum = 0
    for (var i=0;i<=Math.sqrt(num);i++) {
        if (num % i === 0) {
            sum += i
            if (i * i !== num) {
                sum += num/i
            }
        }
    }
    return sum - num === num // (because num / 1 = num  减去这个 num )
}