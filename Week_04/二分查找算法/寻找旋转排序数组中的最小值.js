/**
 * @param {number[]} nums
 * @return {number}
 * 半有序
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right){
      let mid = left + Math.floor((right + 1 - left)/2);
      console.log('mmmm',left,right,mid);
      // 找剩最后一个的时候
      if(left === right) return nums[mid];
      // 什么时候才算找到
      if(nums[mid] < nums[mid-1]){
        return nums[mid];
      }
      if(mid < nums.length && nums[mid] > nums[mid + 1]){
          return nums[mid + 1];
      }
      // 往右边找
      if(nums[mid] > nums[right]){
        left = mid + 1;
      }else{
        right = mid - 1;
      }
  }
};
console.log(findMin([1]));

// console.log(findMin([3,4,5,6,7,0,1,2]));

console.log(findMin([0,1,2,3]));