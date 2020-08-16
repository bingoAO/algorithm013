// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
var minDepth = function(root) {
  const minChildDepth = (root) =>{
      if(!root){
          return 0;
      }
      // 没有左或者右子树的情况下，只计算一边
      if(!root.left){
          return 1 + minChildDepth(root.right);
      }
      if(!root.right){
          return 1 + minChildDepth(root.left);
      }
      return 1 + Math.min(minChildDepth(root.left),minChildDepth(root.right));
  }
  return minChildDepth(root);
};