/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return !/L{3,}|A.*A/.test(s)
};