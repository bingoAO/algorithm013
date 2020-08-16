// https://leetcode-cn.com/problems/validate-binary-search-tree/
var isValidBST = function(root) {
  // 注意一点是，父节点要跟所有的左子树进行对比，而不是子节点进行对比
  const validateBST = (root,up,down) => {
      if(!root){
          return true;
      }
      if(root.val >= up)return false;
      if(root.val <= down) return false;
      // 右节点同时是作为上次父亲的左节点，所以除了要比较比父节点大，还是匹配比上界小
      return validateBST(root.left,root.val,down) && validateBST(root.right,up,root.val);
  }

  return validateBST(root,Infinity,-Infinity);
};