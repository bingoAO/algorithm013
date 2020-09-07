var maxProduct = function(nums) {
  // 保存前面的一个最小值和最大值
  let prevMin = nums[0];
  let prevMax = nums[0];
  let currentMax = nums[0];
  for(let i = 1;i<nums.length;i++){
      let tmpMax = prevMax;
      prevMax = Math.max(nums[i] * prevMax,nums[i] * prevMin,nums[i]);
      // 注意算到这一步的时候prevMax已经被修改过了
      prevMin = Math.min(nums[i] * prevMin,nums[i] * tmpMax,nums[i]);
      currentMax = Math.max(prevMax,currentMax);
  }
  return currentMax;
};

console.log(maxProduct([0,-1,1,-2,-3]));