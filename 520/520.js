/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var reg1 = /^[A-Z]+$/
    var reg2 = /^[a-z]+$/
    var reg3 = /^[A-Z][a-z]*$/
    
    return reg1.test(word) || reg2.test(word) || reg3.test(word)
};