// https://leetcode-cn.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
// 找出递推关系(子问题)
var climbStairs = function(n) {
  let arr = [1,2];
  for(let i = 2;i<n;i++){
      arr[i] = arr[i - 1] + arr[i-2];
  }
  return arr[n - 1]
};