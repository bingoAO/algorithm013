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
var preorderTraversal = function(root) {
  let results = [];
  const traversal = function(root,results){
      if(!root){
          return;
      }
      // 前左右
      results.push(root.val);
      traversal(root.left,results)
      traversal(root.right,results)
  }
  traversal(root,results);
  return results;
};