var coinChange = function(coins, amount) {
  let sorted = coins.sort((a,b)=>{
      return b - a;
  });
  const find = (sorted,start,amount,consume) => {
      if(amount % sorted[start] === 0){
          // 找到了 花费最少
          return amount / sorted[start] + consume;
      }
      else{
          if(sorted.length === start + 1){
            return -1;
          }
          return find(sorted,start+1,amount%sorted[start],consume + Math.floor(amount/sorted[start]));
      }
  }
  const count = find(sorted,0,amount,0);
  return count;
};



console.log(coinChange([186,419,83,408],6249));