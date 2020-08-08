// https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/solution/ncha-shu-de-ceng-xu-bian-li-by-leetcode/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root){
      return [];
  }
  let result = [[root.val]]
  let queue = [];
  queue.push(root);
  while(queue.length > 0){
      let ql = queue.length;
      let levelResult = [];
      // 当前队列里面的就是一层
      for(let i = 0;i<ql;i++){
          let current = queue.shift();
          if(current.children && current.children.length > 0){
              let tmp = current.children.map((el)=>el.val);
              levelResult.push(...tmp);
              queue.push(...current.children);
          }
      }
      levelResult.length > 0 && result.push(levelResult);
      // if(current.children && current.children.length > 0){
      //     let tmp = current.children.map((el)=>el.val);
      //     result.push(tmp);
      //     queue.push(...current.children);
      // }
  }
  return result;
};