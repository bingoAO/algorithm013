// https://leetcode-cn.com/problems/subsets/
/**
 * 模式识别，找到比O(n)更好的算法
 * 存储计算过的结果，half
 */
var myPow = function(x, n) {
  if(x === 0){
      return 0;
  }
  // 取绝对值
  let now = Math.abs(n);
  const _myPow = (x,n) => {
      if(n === 0){
          return 1;
      }
      if(n === 1){
          return x;
      }
      // 判断是奇数还是偶数
      let rest = n % 2;
      if(rest === 0){
          let half = _myPow(x,n/2);
          return half * half;
      }else{
          let half = _myPow(x,(n-1)/2);
          return x * half * half;
      }
  }
  let sum = _myPow(x,now);

  // 取倒数
  if(n < 0){
      sum = 1/sum;
  }

  return sum.toFixed(5);
};