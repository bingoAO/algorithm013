/**
 * @param {number} x
 * @return {number}
 * 二分查找
 * https://leetcode-cn.com/problems/sqrtx/solution/cong-ji-ben-de-er-fen-fa-shuo-qi-jie-jue-xde-ping-/
 */
var mySqrt = function(x) {
  let left = 0;
  let right = x;
  while(left <= right){
    let mid = left + Math.floor((right - left)/2);
    if(mid * mid === x)return mid;
    if(mid * mid > x && (mid-1)*(mid-1) <= x){
      return mid -1;
    }
    // 左边需要增加
    if(mid*mid < x){
      left = mid + 1;
    }
    // 右边需要变小
    if(mid*mid > x){
      right = mid - 1;
    }
  }
};

console.log(mySqrt(8));

// /**
//  * @param {number} x
//  * @return {number}
//  * 暴力解法
//  */
// var mySqrt = function(x) {
//   if(x === 0) return 0;
//   let i = 1;
//   while(i){
//     if(i*i === x){
//       return i;
//     }
//     if(i*i > x){
//       return i - 1;
//     }
//     i++;
//   }
// };

// console.log(mySqrt(3));