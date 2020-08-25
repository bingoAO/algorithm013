/**
 * @param {number} num
 * @return {boolean}
 * https://leetcode-cn.com/problems/valid-perfect-square/
 */
var isPerfectSquare = function(num) {
  let left = 0;
  let right = num;
  while(left <= right){
    let mid = left + Math.floor((right - left)/2);
    if(mid * mid === num){
      return true;
    }
    // 右边界收缩
    if(mid * mid > num){
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return false
};

console.log(isPerfectSquare(12));