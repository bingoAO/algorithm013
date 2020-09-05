/**
 * @param {number[]} nums
 * @return {number}
 * 也可以使用动态规划，将累计的值记录在数组中，最后取数组中的最大元素
 */
var maxSubArray = function(nums) {
  if(nums.length === 0)return 0;
  let max = nums[0];
  let prev = nums[0]
  for(let i = 1;i<nums.length;i++){
      // 注意是连续
      prev = Math.max(prev + nums[i],nums[i]);
      if(prev > max){
          max = prev;
      }
  }
  return max;
};