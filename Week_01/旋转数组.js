// 方法三
// 分为k轮进行移动
// 移动到指定的坑
var rotate = function(nums, k) {
  k = k%nums.length;
  let n = nums.length;
  let count = 0;
  // 有些是一轮可以搞定的，但是有些不行
  // 需要进行nums.length次，每次的步伐+k
  // 被替换的位置需要存储下来，不然数据会丢失
  for(let round = 0;round<k && count<n;round++){
      let prev = nums[round];
      index = round;
      do {
          let next = (index+k)%n;
          let tmp = nums[next];
          nums[next] = prev;
          prev = tmp;
          index = next;
          count++;
      }while(index!=round);
  }
};