// https://leetcode-cn.com/problems/invert-binary-tree/description/
var invertTree = function(root) {
  const invert = (root)=>{
      if(!root){
          return;
      }
      if(!root.left && !root.right){
          return;
      }
      // 翻转左右子树
      invert(root.right);
      invert(root.left);
      // 当前层翻转
      let tmp = root.right;
      root.right = root.left;
      root.left = tmp;
  }
  invert(root);
  return root;
};