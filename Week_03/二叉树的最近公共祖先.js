// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
// 另一种解法，左子树和右子树都包含p q
var lowestCommonAncestor = function(root, p, q) {
  const tranverse = (root,parent,result) => {
      if(root === null){
          return;
      }
      // 存储当前节点的父节点 --- 可以改为存储路径
      root.parent = parent;
      if(root.val === p.val || root.val === q.val){
          result.push(root);
      }

      // 找到了两个数的时候，向上遍历其parent，
      if(result.length === 2){
          let records = {};
          let qparent = result[0];
          // 存起来
          while(qparent){
              records[qparent.val] = true;
              qparent = qparent.parent;
          }
          let pparent = result[1];
          while(pparent){
              if(records[pparent.val]){
                  result.unshift(pparent);
                  return;
              }
              pparent = pparent.parent
          }
          return;
      }
      tranverse(root.left,root,result);
      tranverse(root.right,root,result);
  }
  let result = [];
  tranverse(root,null,result);
  return result[0];
};