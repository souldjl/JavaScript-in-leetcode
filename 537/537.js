/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function parse(text) {
    var result = []
    var match = text.match(/(\-?\d+)\+(\-?\d+i)/)
    if (match) {
        result[0] = parseInt(match[1])
        result[1] = parseInt(match[2])
    }
    return result
}
var complexNumberMultiply = function(a, b) {
    var aArr = parse(a)
    var bArr = parse(b)
    return aArr[0] * bArr[0] + (-1) * aArr[1] * bArr[1] + '+' + (aArr[0] * bArr[1] + aArr[1] * bArr[0]) + 'i'
};

console.log(complexNumberMultiply("1+-1i", "1+-1i"))