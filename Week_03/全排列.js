// https://leetcode-cn.com/problems/permutations/
/**
 * 全排列中，区分数组中数字的顺序
 * 判断当前位置填什么，下一个位置不能填写当前填写过的(通过层数+1 可以得到控制)，递归的层数等于数字的长度的时候就是需要的长度
 */
var permute = function(nums) {
  const _permute = (nums) => {
      if(nums.length === 1){
          return [nums];
      }
      let result = [];
      for(let i = 0;i<nums.length;i++){
          let current = nums[i];
          let rest = nums.filter((val)=>{return (val != current)});
          let lastResult = _permute(rest);
          let tmp = lastResult.map((arr)=>{return [nums[i],...arr]});
          result.push(...tmp);
      }
      return result;
  }
  return _permute(nums);
};