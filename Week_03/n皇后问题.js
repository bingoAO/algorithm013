// https://leetcode-cn.com/problems/n-queens/
// 优化:在求解过程中可以使用一纬数组进行信息的存储，最后输出的时候再转成二维数组
var solveNQueens = function(n) {
  let result = [];
  const generateRow = function(n,qIndex){
      let arr = new Array(n);
      for(let i = 0;i<arr.length;i++){
          if(i === qIndex){
              arr[i] = "Q";
          }else{
              arr[i] = ".";
          }
      }
      return arr.join("");
  }
  // 进行剪纸判断
  const isConflictWithPlaced = function(placed,row,column){
    for(let i = 0;i<placed.length;i++){
      let placedPosition = placed[i];
      if(column === placedPosition[1])return true;
      if(column === placedPosition[1] + (row - placedPosition[0]) || column === placedPosition[1] - (row - placedPosition[0]))return true;
    }
    return false;
  }
  const dfs = function(n,row,pathArr,placed){
      // 处理最后的生成结果
      if(n===row){
          result.push(pathArr);
          return;
      }
      // 列
      for(let column = 0;column<n;column++){
          // 进行剪枝
          // 不能在同一行(已经处理，每次加一)
          // 不能在同一列 记录已经用过的列
          // 不能在对角线（左右对角线）
          if(isConflictWithPlaced(placed,row,column)){
            continue;
          }
          // 放在第几行的第几列中
          placed.push([row,column]);
          // 这里不用每次都去生成，可以在所有结束之后再进行数据的生成
          pathArr.push(generateRow(n,column));
          dfs(n,row + 1,[...pathArr],placed);
          // 回溯
          placed.pop();
          pathArr.pop();
      }
  }
  dfs(n,0,[],[]);
  return result;
};
console.log(solveNQueens(4));