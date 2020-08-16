// https://leetcode-cn.com/problems/permutations-ii/
// 与全排列对比: 输入的测试数据可以包含重复的数字
// 加入剪枝操作，如果当前路径是前面尝试过的（通过增加一个状态保存的参数进行追踪，在进行第二轮之前记得重置状态），则剪掉
// 先排序后剪枝，或者通过hash进行记录
// if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
//   continue;
// }
var permuteUnique = function(nums) {
  let result = [];
  const dfs = (nums,depth,used,path,usedPath) => {
      if(depth === nums.length){
          result.push(path);
          return;
      }
      for(let i = 0;i<nums.length;i++){
          
          // 这个下标的数字被使用过
          if(used[i]){
              continue;
          }
          // 加入到排列的路径中
          path.push(nums[i]);
          if(usedPath[path.join("_")]){
              path.pop(nums[i]);
              continue;
          }else{
             usedPath[path.join("_")] = true; 
          }
          used[i] = true;
          dfs(nums,depth + 1,used,[...path],usedPath);
          path.pop(nums[i]);
          used[i] = false;
      }
  }
  dfs(nums,0,{},[],{});
  return result;
};