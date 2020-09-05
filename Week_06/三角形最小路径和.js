// https://leetcode-cn.com/problems/triangle/submissions/
// 否定判断的时候注意0的情况
// 优化，从底向上递推 ==》使用一维空间
var minimumTotal = function(triangle) {
  if(triangle.length === 0 || triangle[0].length === 0)return 0;
  let tmp = [];
  tmp[0] = triangle[0];
  for(let i = 1;i<triangle.length;i++){
      let row = triangle[i];
      tmp[i] = new Array(row.length);
      for(let c = 0;c<row.length;c++){
        // c 或者 c-1都有可能为undefined 注意不能直接非判断 0会有问题
          tmp[i][c] = triangle[i][c] + Math.min(tmp[i-1][c] === undefined ? Infinity : tmp[i-1][c],
            tmp[i-1][c-1] === undefined ? Infinity : tmp[i-1][c-1])
      }
  }
  // console.log(tmp);
  let finalRow = tmp[tmp.length-1];
  let min = finalRow[0];
  for(let i = 1;i< finalRow.length;i++){
      if(min > finalRow[i]){
          min = finalRow[i]
      }
  }
  return min;
};

// [
//   [2],
//  [3,4],
// [6,5,7],
// [4,1,8,3]
// ]
console.log(minimumTotal([[1],[-5,-2],[3,6,1],[-1,2,4,-3]]))
