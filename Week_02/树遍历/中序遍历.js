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
var inorderTraversal = function(root) {
  let result = [];
  // 遍历左子树
  // 根
  // 遍历右子树
  const tranversal = function(root,result){
      if(root === null){
          return;
      }
      tranversal(root.left,result);
      result.push(root.val);
      tranversal(root.right,result);
  }
  tranversal(root,result);
  return result;
};