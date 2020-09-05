/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 解法一、递归 超时
 * 解法二、使用动态规划 淘汰次优解，只用记录 m,n-1 m-1,n两个位置的走法，f(m,n)的走法 = f(m,n-1) + f(m-1,n)
 */
// var uniquePaths = function(m, n) {
//   const countPath = (x,y) => {
//       // m === n 的情况?
//       if(x == m){
//           return 1;
//       }
//       if(y === n){
//           return 1;
//       }
//       let xCount = countPath(x + 1,y);
//       let yCount = countPath(x,y + 1);

//       return xCount + yCount;
//   }
//   return countPath(1,1);
// };
var uniquePaths = function(m, n) {
  let matrix = [];
  for(let i = 0;i<n;i++){
    let tmp = new Array(m);
    tmp[0] = 1;
    matrix.push(tmp);
  }
  for(let j = 0;j<m;j++){
    matrix[0][j] = 1;
  }
  // console.log('matrix',matrix)
  for(let i = 1; i < n;i++){
    for(let j = 1;j< m;j++){
      matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
    }
  }
  return matrix[n - 1][m - 1]
};

console.log(uniquePaths(7,3));