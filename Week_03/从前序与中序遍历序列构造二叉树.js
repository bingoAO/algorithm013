/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 解题关键:
 * 前序遍历的第一个数是父节点
 * 中序遍历中，父节点划分左右子树
 */
var buildTree = function(preorder, inorder) {
  if(!preorder || preorder.length === 0){
      return null;
  }    
  const _build = (preorder,inorder) => {
      if(!preorder || preorder.length === 0)return null;
      // 递归结束条件
      let root = {val:preorder[0],left:null,right:null};
      let splitIndex = inorder.indexOf(root.val);
      if(splitIndex === 0){//1
          root.left = null;
      }else{
          // 不用每次修改数组，改成用指针的形式进行头尾追踪
          let left = inorder.slice(0,splitIndex);//9
          let preLeft = preorder.slice(1,1+left.length);//9
          root.left = _build(preLeft,left);
      }
      if(splitIndex === inorder.length-1){
          root.right = null;
      }else{
          let right = inorder.slice(splitIndex + 1);// 15 20 7
          let preRight = preorder.slice(splitIndex + 1);// 20,15,7
          root.right = _build(preRight,right);
      }
      return root;
  }
  return _build(preorder, inorder);
};