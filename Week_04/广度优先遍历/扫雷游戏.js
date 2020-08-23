/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 * https://leetcode-cn.com/problems/minesweeper/description/
 */
var updateBoard = function(board, click) {
  // 点中地雷
  if(board[click[0]][click[1]] === 'M'){
      board[click[0]][click[1]] = 'X';
      return board;
  }
  let queue = [click];
  // 边界 
  let minRow = -1;
  let maxColumn = board[0].length;
  let minColumn = -1;
  let maxRow = board.length;
  while(queue.length){
      let length = queue.length;
      for(let i = 0;i<length;i++){
          let current = queue.shift();
          let curX = current[0];
          let curY = current[1];
          // 把当前相邻位置找出来
          let top = [curX,curY - 1];
          let bottom = [curX,curY + 1];
          let left = [curX - 1,curY];
          let right = [curX + 1,curY];
          let sedCross1 = [curX + 1,curY - 1];
          let sedCross2 = [curX - 1,curY + 1];
          let mainCross1 = [curX + 1,curY + 1];
          let mainCross2 = [curX - 1,curY - 1];
          let allPoints = [top,bottom,left,right,sedCross1,sedCross2,mainCross1,mainCross2];
          //  地雷数量
          let mNums = 0;
          for(let i = 0;i<allPoints.length;i++){
              let position = allPoints[i];
              // 在边界内
              if(position[0] > minRow && position[0]<maxRow && position[1] > minColumn && position[1]<maxColumn){
                  if(board[position[0]][position[1]] === 'M'){
                      mNums++;
                  }
              }
          }
          board[curX][curY] = mNums > 0 ? mNums + '' : 'B';

          // 当前状态为'B'的时候进行扩散
          if(board[curX][curY] === 'B'){
            for(let i = 0;i<allPoints.length;i++){
              let position = allPoints[i];
              // 在边界内
              if(position[0] > minRow && position[0]<maxRow && position[1] > minColumn && position[1]<maxColumn){
                  if(board[position[0]][position[1]] === 'E'){
                      // 先进行标志
                      board[position[0]][position[1]] = 'B';
                      // 当前状态为未挖出的状态
                      queue.push(position);
                  }
              }
            }
          }
      }
  }
  return board;
};



let board = [
  ["B","1","E","1","B"],
  ["B","1","M","1","B"],
  ["B","1","1","1","B"],
  ["B","B","B","B","B"]
];
let click = [1,2];
let result = updateBoard(board,click);

console.log('result',result);

// [['B', '1', 'E', '1', 'B'],
//  ['B', '1', 'M', '1', 'B'],
//  ['B', '1', '1', '1', 'B'],
//  ['B', 'B', 'B', 'B', 'B']]