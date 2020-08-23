/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if(!root)return [];
  let queue = [root];
  let result = [];
  while(queue.length){
      let length = queue.length;
      let max = -Infinity;
      for(let i = 0;i<length;i++){
          let current = queue.shift();
          if(current.val > max){
              max = current.val;
          }
          if(current.left){
              queue.push(current.left);
          }
          if(current.right){
              queue.push(current.right);
          }
      }
      result.push(max);
  }
  return result;
};