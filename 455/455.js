/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(compare)
    s.sort(compare)
    var result = 0, 
        i = 0,
        j = 0,
        sLen = s.length,
        gLen = g.length
    for (;i<sLen && j<gLen;) {
        if (s[i] >= g[j]) {
            result++
            i++
            j++
        } else {
            i++
        }
        continue
    }
    return result
};

function compare(val1, val2){
    if (val1 < val2) {
        return -1
    } else if(val1 > val2) {
        return 1
    } else {
        return 0
    }
}