/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 注意越界的情况
 */
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0)return false;
  let tmp = [];
  matrix.forEach((row)=>{
    tmp = tmp.concat(row);
  });
  if(tmp.length === 0)return false;
  let left = 0;
  let right = tmp.length - 1;// 注意越界的情况
  while(left <= right){
    let mid = left + Math.floor((right + 1 - left)/2);
    if(target === tmp[mid])return true;
    // target在右边 左边更新 
    if(tmp[mid] < target){
      left = mid + 1;
    }
    if(tmp[mid] > target){
      right = mid - 1;
    }
  }
  return false;
};

let result = searchMatrix([
  [1]
],23)
console.log(result);