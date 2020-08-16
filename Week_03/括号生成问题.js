// https://leetcode-cn.com/problems/generate-parentheses/
var generateParenthesis = function(n) {
  let result = [];
  const generate = (result,current,leftcount,rightcount) => {
      if(current.length === 2 * n){
          result.push(current);
          return;
      }
      // 根据有效括号的条件进行剪枝
      if(leftcount < n){
          // 当前层填写左括号的所有组合
          generate(result,current + "(",leftcount + 1,rightcount);
      }
      if(rightcount < leftcount){
          // 当前层填写右括号的所有组合
          generate(result,current + ")",leftcount,rightcount + 1);
      }
  }
  generate(result,'',0,0)
  return result;
};