/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var len1 = list1.length
    var len2 = list2.length
    var min = len1 + len2 - 2
    var result = []
    
    for (var i=0;i<len1;i++) {
        var r = list1[i]
        var j = list2.indexOf(r)
        if (j > -1) {
            if (i+j<min) {
                min = i + j
                result = [list2[j]]
            } else if (i+j === min) {
                result.push(list2[j])
            }
        }
    }
    return result
}