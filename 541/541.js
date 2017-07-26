/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var result = ''
    while (s) {
        var current = s.slice(0,2 * k) 
        var len = current.length
        if (len < k) {
            result += current.split('').reverse().join('')
        } else {
            result += (current.slice(0,k).split('').reverse().join('') + current.slice(k))
        }
        s = s.slice(2 * k)
    }
    return result
}