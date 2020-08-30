/**
 * @param {number[]} prices
 * @return {number}
 * 使用数学的手段 进行简化
 */
var maxProfit = function(prices) {
  let max = 0;
  let i = 1;
  while(i<prices.length){
      if(prices[i] > prices[i-1]){
          max = max + prices[i] - prices[i-1];
      }
      i++;
  }
  return max;
};