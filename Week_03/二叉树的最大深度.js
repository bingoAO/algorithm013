
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
var maxDepth = function(root) {
  const maxChildDepth = (root) => {
      if(!root){
          return 0;
      }
      return 1+Math.max(maxChildDepth(root.left),maxChildDepth(root.right));
  }
  return maxChildDepth(root);
};