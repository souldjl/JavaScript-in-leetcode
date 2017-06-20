/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(/\s/).map(value => value.split('').reverse().join('')).join(' ')
};