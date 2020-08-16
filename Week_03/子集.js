// https://leetcode-cn.com/problems/subsets/
/**
 * 选或者不选
 * 或者 转换成组合的问题
 */
var subsets = function(nums) {
  var result = [];
  var subsets = [];
  var len = nums.length;
  function combinate(subsets,index){
       // terminator
      if(index == len){
          result.push(subsets)
          return;
      }
      // process
      // 不选
      combinate(subsets,index+1);
      subsets.push(nums[index]);
      // 选
      combinate(subsets.slice(0),index+1);
      // reverse states
      subsets.pop();
  }
  combinate(subsets,0);
  return result;
}