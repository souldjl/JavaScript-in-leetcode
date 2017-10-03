/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length
    var profit = 0
    for (var i=0;i<len;i++) {
        var min = max = prices[i]
        for (var j=i;j<len;j++) {
            if (prices[j] > max) max = prices[j]
        }
        if (max - min > profit) profit = max - min
    }
    return profit
};