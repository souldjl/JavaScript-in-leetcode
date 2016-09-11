/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows<1){
        return [];
    }
     if (numRows===1){
        return [[1]];
    }
    if (numRows===2){
        return [[1],[1,1]];
    }
    if (numRows>2){
        var result  = [[1],[1,1]];
        for (var i=2;i<numRows;i++){
            result[i]=[];
            result[i][0]=1;
            result[i][i]=1;
            for (var j=1;j<=i-1;j++){
                result[i][j]=result[i-1][j-1] + result[i-1][j];
            }
        }
        return result;
    }
};