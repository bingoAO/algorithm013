// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
/**
 * 转换为全排列问题
 */
var letterCombinations = function(digits) {
  let maps = {
      2:["a","b","c"],
      3:["d","e","f"],
      4:["g","h","i"],
      5:["j","k","l"],
      6:["m","n","o"],
      7:["p","q","r","s"],
      8:["t","u","v"],
      9:["w","x","y","z"],
  }
  let result = [];
  const _combine = function(digits,depth,path){
      if(depth === digits.length){
          !!path && result.push(path);
          return;
      }
      let currentNum = digits[depth];
      let letters = maps[currentNum];
      if(!!letters){
          for(let i = 0;i<letters.length;i++){
              path = path + letters[i];
              _combine(digits,depth+1,path);
              path = path.slice(0,path.length-1);
          }
      }else{
          _combine(digits,depth+1,path);
      }
      
  }
  _combine(digits,0,'')
  return result;
};