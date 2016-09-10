/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(' ')
    var last = s.pop()
    return last.trim().length
};

// 当然完全也可以一句话搞定 reutrn s.trim().split(' ').pop().trim().length