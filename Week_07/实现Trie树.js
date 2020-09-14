/**
 * Initialize your data structure here.
 */
var Trie = function() {
  // {}
  this.root = {
    next:{},
    isEnd:false
  };
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let pointer = this.root;
  for(let c of word){
    let dict = pointer.next;
    if(!dict[c]){
      dict[c] = {
        next:{},
        isEnd:false
      }
    }
    pointer = dict[c];
  }
  pointer.isEnd = true;
  return null;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let pointer = this.root;
  for(let c of word){
    let dict = pointer.next;
    if(!dict[c])return false;
    pointer = dict[c];
  }
  return pointer.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let pointer = this.root;
  for(let c of prefix){
    let dict = pointer.next;
    if(!dict[c])return false;
    pointer = dict[c];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie();

let a0 = trie.insert("apple");
let a1 = trie.search("apple");   // 返回 true
let a2 = trie.search("app");     // 返回 false
let a3 = trie.startsWith("app"); // 返回 true
let a4 = trie.insert("app");   
let a5 = trie.search("app");     // 返回 true

console.log(a0,a1,a2,a3,a4,a5)