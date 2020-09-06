/**
 * @param {string} s
 * @return {number}
 * https://leetcode-cn.com/problems/palindromic-substrings/
 */
// var countSubstrings = function(s) {
//   let number = 0;

//   for(let i = 0;i<2*s.length-1;i++){
//       let lmid =Math.floor(i/2);
//       // 合并奇数偶数的情况
//       let rmid = Math.floor(i/2) + i%2;
//       while(s[lmid] === s[rmid] && lmid >= 0 && rmid<s.length){
//           lmid--;
//           rmid++;
//           number++;
//       }
//   }
//   return number;
// };

/**
 * 动态规划的做法
 * 这里的状态方程，数组下标标示的是范围
 * 递推关系是：
 * 一个字符串是否是回文子串，可以分为三种情况考虑
 * 1.字符串长度为1，是
 * 2.字符串长度为2，如果两个字符相等，是
 * 3.字符串长度大于2，可以有上面两种情况，加上判断前后字符是否相等递推出来
 * @param {*} s 
 */
var countSubstrings = function(s) {
  let count = 0;
  let dp = Array.from(new Array(s.length),() => new Array(s.length).fill(false));;
  for(let j = 0;j<s.length;j++){
    for(let i = 0;i<=j;i++){// 只填上半部分
      if(i === j){
        dp[i][j] = true;
      }else if(j - i === 1){
        dp[i][j] = s[i] === s[j] ? true : false;
      }else{
        dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];// 计算i -- j的时候 i+1 -- j-1的位置已经被计算过
      }
      if(dp[i][j]) count++;
    }
  }
  return count;
};

console.log(countSubstrings("aaa"))