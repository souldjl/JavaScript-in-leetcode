/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var reg1, reg2, reg3, len
    return words.filter(v => {
        v = v.toLowerCase()
        len = v.length
        reg1 = new RegExp(`[qwertyuiop]{${len}}`)
        reg2 = new RegExp(`[asdfghjkl]{${len}}`)
        reg3 = new RegExp(`[zxcvbnm]{${len}}`)
        return reg1.test(v) || reg2.test(v) || reg3.test(v)
    })
}