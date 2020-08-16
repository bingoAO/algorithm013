// https://leetcode-cn.com/problems/majority-element/description/
// 分治 + hash
var majorityElement = function(nums) {
  let statistic = {};
  const tranverse = function(nums,start,end){
      if(start == end){
          statistic[nums[start]] = statistic[nums[start]] ? statistic[nums[start]] + 1 : 1;
          return;
      }
      tranverse(nums,start,start + Math.floor((end-start)/2));
      tranverse(nums,start + Math.floor((end-start)/2) + 1,end);
  }
  tranverse(nums,0,nums.length-1);
  for(key in statistic){
      if(statistic[key] > nums.length/2){
          return key;
      }
  }
};