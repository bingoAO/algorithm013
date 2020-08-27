// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  * 注意越界的情况
//  */
// var searchMatrix = function(matrix, target) {
//   if(matrix.length === 0)return false;
//   let tmp = [];
//   matrix.forEach((row)=>{
//     tmp = tmp.concat(row);
//   });
//   if(tmp.length === 0)return false;
//   let left = 0;
//   let right = tmp.length - 1;// 注意越界的情况
//   while(left <= right){
//     let mid = left + Math.floor((right + 1 - left)/2);
//     if(target === tmp[mid])return true;
//     // target在右边 左边更新 
//     if(tmp[mid] < target){
//       left = mid + 1;
//     }
//     if(tmp[mid] > target){
//       right = mid - 1;
//     }
//   }
//   return false;
// };

// let result = searchMatrix([
//   [1]
// ],23)
// console.log(result);

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0)return false;
  if(matrix[0].length === 0)return false;

  const searchThisRow = (row) => {
    let rowL = 0;let rowR = row.length - 1;
    while(rowL <= rowR){
        let mid = rowL + Math.floor((rowR + 1 - rowL)/2);
        let value = row[mid];
        if(target === value){
            return true;
        }
        if(target > value){
            rowL = mid + 1;
        }
        if(target < value){
            rowR = mid - 1;
        }
    }
    return false;
  }

  let rowL = 0;let rowR = matrix.length - 1;
  while(rowL <= rowR){
      let mid = rowL + Math.floor((rowR + 1 -rowL)/2);
      let rowdata = matrix[mid];
      // 比最后一个数大，搜索下一行
      if(target > rowdata[rowdata.length -1]){
          rowL = mid + 1;
      }
      else if(target < rowdata[0]){
          rowR = mid - 1;
      }
      else{
        return searchThisRow(matrix[mid]);
      }
  }

  return false;
};

let matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
let target = 34;

console.log(searchMatrix(matrix,target));