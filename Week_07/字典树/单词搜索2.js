var findWords = function(board, words) {
  // for word in word
  // build tried tree tried:{o:{val:o,next:{a:{next:t:{next:{h:{next:null,isEnd:true}}}}}}}
  // for ch in board
  // find ch match // tried[ch] find o find oa，
  // finded findfourDirection // 终止条件 位置isvisited
  let tried = new Tried();
  for(let i = 0;i<words.length;i++){
      tried.insert(words[i]);
  }

  let result = [];
  let visited = {};

  for(let row = 0;row<board.length;row++){
      for(let col = 0;col<board[row].length;col++){
          findWord(tried,visited,result,'',board,row,col);
      }
  }
  return result;
};

const findWord = (tried,visited,result,prefix,board,row,col) => {
  // 越界
  if(row < 0 || row >= board.length || col >= board[0].length || col < 0){
      return;
  }
  prefix = prefix + board[row][col];
  if(visited[row + "_" + col])return;
  visited[row + "_" + col] = true;

  let current = tried.search(prefix);
  if(current){
      result.push(prefix);
      current.isEnd = false;
      // tried.remove(prefix);
  }
  if (tried.startWith(prefix)){
      // 上 下 左 右
      let xOffset = [0,0,-1,1];
      let yOffset = [-1,1,0,0];
      //  四周扩散查找
      for(let i = 0;i<xOffset.length;i++){
          let nextRow = row + xOffset[i];
          let nextCol = col + yOffset[i];
          findWord(tried,visited,result,prefix,board,nextRow,nextCol);
      }
  }
  // 清除本次操作的影响
  visited[row + "_" + col] = false;
}

class TriedNode {
constructor(){
    this.next = null;
    this.isEnd = false;
}
}

class Tried {
constructor(){
    this.root = {
        next:{},//{a:{},b:{}}
        isEnd:false
    }
}
insert(word){
    let tried = this.root;
    for(let ch of word){
        if(!tried.next){
            tried.next = {};
        }
        if(!tried.next[ch]){
            tried.next[ch] = new Tried();
        }
        tried = tried.next[ch];
    }
    tried.isEnd = true;
}
startWith(prefix){
    let tried = this.root;
    for(let ch of prefix){
        if(!tried.next || !tried.next[ch]){
            return false;
        }
        tried = tried.next[ch];
    }
    return true;
}
search(word){
    let tried = this.root;
    for(let ch of word){
        if(!tried.next || !tried.next[ch]){
            return null;
        }
        tried = tried.next[ch];
    }
    return tried.isEnd ? tried : null;
}
// remove(word){
//   let tried = this.root;
//     for(let ch of word){
//         if(!tried.next || !tried.next[ch]){
//             return false;
//         }
//         tried = tried.next[ch];
//     }
//     if(tried.isEnd){
//       tried.isEnd = false;
//       return true;
//     }
//     return false;
// }
}

let words = ["oath","pea","eat","rain","hi","hit",'rn','at',"eate"];
let board = [
  ['o','a','r','n'],
  ['e','t','a','e'],
  ['i','h','i','t'],
  ['i','f','i','t']
]

// output
// [
//   'oath', 'at',
//   'rn',   'eat',
//   'eate', 'hi',
//   'hit'
// ]
console.log(findWords(board,words));