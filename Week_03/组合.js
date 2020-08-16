// https://leetcode-cn.com/problems/combinations/
/**
 * 组合中不能有相同的数字
 * 判断当前位置填什么，下一个位置不能填写当前填写过的，而且第二轮不应该包含前面几轮组合的数字(每次递归的时候，传入递归的开始索引为本轮递归索引+1)
 * 递归的层数等于数字的长度的时候就是需要的长度
 */
var combine = function(num, count) {
  const _combine = (n,k) => {
      let result = [];
      if(k === 1){
          for(let i = 1;i<n + 1;i++){
              result.push([i]);
          }
          return result;
      }
      if(n === k){
          for(let i = 1;i<n + 1;i++){
              result.push(i);
          } 
          return [result];
      }
      let lastCombine = _combine(n-1,k-1);
      let tmp = lastCombine.map((arr)=>{
          return [...arr,n];
      });
      result = [..._combine(n-1,k),...tmp];
      return result;
  }

  return _combine(num,count);
};