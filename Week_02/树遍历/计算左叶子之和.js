//404
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 判断是叶子节点而且是子叶子节点
 */
var sumOfLeftLeaves = function(root) {
  let calcSum = (root,isRootLeft) => {
      if(!root)return 0;
      if(!root.left && !root.right){
          return isRootLeft ? root.val : 0;
      }
      return calcSum(root.left,true) + calcSum(root.right,false);
  }
  return calcSum(root,false);
};