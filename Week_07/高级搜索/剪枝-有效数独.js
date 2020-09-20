/**
 * @param {character[][]} board
 * @return {boolean}
 * 判断所在行是否符合规则 并且标志该行已经判断过
 * 判断所在列是否符合规则 并且标志该列已经判断过
 * 判断所在的3*3方格是否符合规则 并且标志已经判断过
 * 
 * https://leetcode-cn.com/problems/valid-sudoku/solution/36-you-xiao-de-shu-du-by-alexer-660/
 * 优化的方式 进行一次遍历，用三个对象存储该行，列，子数独中数字出现的次数
 */
var isValidSudoku = function(board) {
  let rowVisited = {};
  let colVisited = {};
  let sectionVisited = {};
  for(let row = 0;row<board.length;row++){
      for(let col = 0;col<board.length;col++){
          if(!rowVisited[row] && !isRowValidate(board,row)) {
              return false;
          }
          if(!colVisited[col] && !isColumnValidate(board,col)){
              return false;
          }
          if(!sectionVisited[Math.floor(row/3)+"_" + Math.floor(col/3)] &&
          !isSectionValidate(board,row,col)
          ){
              return false;
          }
      }
  }
  return true;
};

var isRowValidate = function(board,row) {
  return !isDuplicated(board[row])
}

var isColumnValidate = function(board,col) {
  let arr = [];
  for(let i = 0;i< board.length;i++){
      arr.push(board[i][col]);
  }
  // console.log(arr);
  return !isDuplicated(arr); 
}

var isSectionValidate = function(board,row,col) {
  let arr = [];
  let boundRow = Math.floor(row/3)*3;
  let boundCol = Math.floor(col/3)*3;
  for(let i = boundRow;i<boundRow+3;i++){
      for(let col = boundCol;col<boundCol+3;col++){
          arr.push(board[i][col]);
      }
  }
  return !isDuplicated(arr);
}

var isDuplicated = function(arr){
  let cache = {};
  for(let i = 0;i<arr.length;i++){
      // 只判断非空白部分
      if(arr[i] === '.'){
          continue;
      }
      if(!cache[arr[i]]){
          cache[arr[i]] = true;
      }else{
        // console.log('hhh',cache);
          return true;
      }
  }
  return false;
}

const Data = [["1","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(Data));