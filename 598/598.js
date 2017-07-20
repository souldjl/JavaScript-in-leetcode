/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    var len = ops.length
    var x_min = m
    var y_min = n
    for (var i=0;i<len;i++) {
        if (x_min > ops[i][0]) x_min = ops[i][0]
        if (y_min > ops[i][1]) y_min = ops[i][1]
    }
   return x_min * y_min
}