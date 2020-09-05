/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 在62的基础上，对障碍物的位置特殊处理
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid.length === 0 || obstacleGrid[0].length === 0)return 0;
  // 进行初始化,第一列赋值，除障碍物之外全部为1，如果前一个为障碍物，则后面的都为0
  for(let r = 0;r<obstacleGrid.length;r++){
      obstacleGrid[r][0] = obstacleGrid[r][0] === 1 ? 0 : (
        r > 0 && obstacleGrid[r-1][0] === 0 ? 0 : 1
      );
  }
  // 第一行赋值 从1开始，不然会把第一个位置反转
  for(let c = 1;c<obstacleGrid[0].length;c++){
      obstacleGrid[0][c] = obstacleGrid[0][c] === 1 ? 0 : (
        obstacleGrid[0][c-1] === 0 ? 0 : 1
      );
  }
  for(let r = 1;r<obstacleGrid.length;r++){
      for(let c = 1;c < obstacleGrid[0].length;c++){
          if(obstacleGrid[r][c] === 1){
              obstacleGrid[r][c] = 0;
          }else{
              obstacleGrid[r][c] = obstacleGrid[r-1][c] + obstacleGrid[r][c-1]
          }
      }
  }
  return obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1];
};

console.log(uniquePathsWithObstacles([
  [0,1,0],
  [0,1,0],
  [0,0,0]
]));