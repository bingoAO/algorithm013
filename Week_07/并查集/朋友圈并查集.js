var findCircleNum = function(M) {
  let count = M.length;
  let parents = Array.from(M).map((item,index)=>{
    return index;
  });

  const find = function(x){
    if(parents[x] === x){
      return x;
    }
    // 路径压缩
    return (parents[x] = find(parents[x]));
  }
  const union = function(i,j){
      if(find(i) === find(j))
      return;
      parents[parents[i]] = parents[j];
      count--;
  }
  for(let row = 0;row<M.length;row++){
      for(let col = row + 1;col<M.length;col++){
          if(M[row][col] === 1){
              union(row,col);
          }
      }
  }
  // console.log(parents)
  // return Array.from(new Set(parents)).length;
  return count;
}

// const M = [[1,1,0],
// [1,1,0],
// [0,0,1]];
// const M = [[1,1,0],
// [1,1,1],
// [0,1,1]]
const M = [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]

console.log(findCircleNum(M));