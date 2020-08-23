var generateParenthesis = function(n) {
  let result = [];
  const generate = (result,current,leftcount,rightcount) => {
      if(current.length === 2 * n){
          result.push(current);
          return;
      }
      if(leftcount < n){
          generate(result,current + "(",leftcount + 1,rightcount);
      }
      if(rightcount < leftcount){
          generate(result,current + ")",leftcount,rightcount + 1);
      }
  }
  generate(result,'',0,0)
  return result;
};

console.log(generateParenthesis(3));