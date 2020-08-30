/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * 每个孩子最多给一块饼干
 */
var findContentChildren = function(g, s) {
  let max = 0;
  let sortedG = g.sort((a,b)=>{
      return a - b;
  });
  let sortedS = s.sort((a,b)=>{
      return a - b;
  });
  let j = 0;
  for(let i = 0;i<sortedG.length;i++){
      // 当前饼干比孩子胃口小
      while(j<sortedS.length && sortedS[j]<sortedG[i]){
          j++;
      }
      // 饼干数量不够
      if(j>=sortedS.length){
          break;
      }
      max++;
      j++;
  }
  return max;
};

console.log(findContentChildren([1,2,3], [1,2,3,4]));