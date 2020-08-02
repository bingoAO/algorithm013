/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let cache = {};
  for(let i = 0;i<nums.length;i++){
      let num = nums[i];
      let restNum = target - num;
      // 0 和 9 的情况
      if(cache[restNum]!=undefined){
          return [cache[restNum],i];
      }else{
          cache[num] = i;
      }
  }
};