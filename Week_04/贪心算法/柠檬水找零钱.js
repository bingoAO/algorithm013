/**
 * @param {number[]} bills
 * @return {boolean}
 * 当有5元的时候才可以找零钱，当10元的时候需要消耗5元，当20元的时候需要消耗10元和5元
 * 优化：可以不使用hash，直接使用两个变量进行计数
 * 启发：当需要用到的信息是频次的时候，通常可以用一个变量计数，而不用再去比较前面走过的数
 */
var lemonadeChange = function(bills) {
  let map = {};
  for(let i = 0;i<bills.length;i++){
      if(bills[i] === 10){
        if(!map["5"]){
          return false;
        }else{
          map["5"] = map["5"] - 1;
        }
      }
      if(bills[i] === 20){
        if(map['5'] && map['10']){
          map['10'] = map['10'] - 1;
          map['5'] = map['5'] - 1;
        }else if(map['5'] >= 3){
          map['5'] = map['5'] - 3;
        }else {
          return false;
        }
      }
      map[bills[i]] = map[bills[i]] ? (map[bills[i]]+1) :  1;
  }
  return true;
};

console.log(lemonadeChange([5,5,5,10,20]));