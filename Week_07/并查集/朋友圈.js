/**
 * @param {number[][]} M
 * @return {number}
 * 
 * 深度优先遍历，根据关系进行遍历，i-j j-c c-xxx
 * 先把图中边的连线规则搞清楚要遍历的对象是什么，然后遍历过的节点需要缓存一下，防止死循环
 */
var findCircleNum = function(M) {
  let total = 0;
  let visited = {};
  for(let i = 0;i<M.length;i++){
      if(!visited[i]){
          total++;
          visited[i] = true;
          flagCircle(M,i,visited);
      }
      visited[i] = true;
  }
  return total;
};
const flagCircle = function(M,row,visited) {
  for(let i = 0;i<M.length;i++){
      if(M[row][i] === 1 && !visited[i]){
          visited[i] = true;
          flagCircle(M,i,visited);
      }
  }
}

  // let Data = [[1,0,0],
  // [0,0,0],
  // [1,0,1]];
  // let Data = [[]];
  let Data = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
  console.log(findCircleNum(Data));