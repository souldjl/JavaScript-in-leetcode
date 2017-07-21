/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (!num) return '0'
    var prefix = num > 0 ? '' : '-'
    num = Math.abs(num)
    var result = ''
    
    while (num) {
        result = num % 7 + result
        num = ~~(num / 7)
    }
    
    return prefix + result
}

// 原生方法 return num.toString(7)