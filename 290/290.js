/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var obj = {}
    pattern = pattern.split('')
    str = str.split(' ')
    if (pattern.length !== str.length) {
        return false
    }
    
    for (var i=0,len = pattern.length;i<len;i++) {
        var pat = pattern[i]
        if (!obj[pat]) {
            for (var k in obj) {
                if (obj[k] === str[i]) {
                    return false
                }
            }
            obj[pat] = str[i]
        } else {
            if (obj[pat] !== str[i]) {
                return false
            }
        }
    }
    return true
};