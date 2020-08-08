# 学习笔记

## 哈希表，映射，集合

<https://es6.ruanyifeng.com/#docs/set-map>

### Set

所有元素都是唯一的，没有重复。

### Map

类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

可以用来统计一些频次

### 例题

1. 有效的字母异位词  
<https://leetcode-cn.com/problems/valid-anagram/description/>

2. 字母异位词分组  
<https://leetcode-cn.com/problems/group-anagrams/>  

    解题方式：  

    - 哈希表
    - 算术基本定理，又称为正整数的唯一分解定理，即：每个大于1的自然数，要么本身就是质数，要么可以写为2个以上的质数的积，而且这些质因子按大小排列之后，写法仅有一种方式。

    ```js

    const hash = str.split('').reduce((sum, s)=>{
      return sum * [3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103 ][s.charCodeAt(0) - 97]
      }, 1)
    ```

    - 计数

    ```js
    let arr = Array(26).fill(0)
    for(let j = 0; j < str.length; j++) {
        arr[str.charCodeAt(j) - 97] ++
    }
    let hashKey = arr.join()
    ```

    小结：

    根据题目特性，为hash表设置合适的key

## 树、二叉树、二叉搜索树

### 二叉树的遍历

```js
// 中序遍历
// 遍历左子树
// 根
// 遍历右子树
const tranversal = function(root,result){
    if(root === null){
        return;
    }
    // 调整这里的顺序，来进行前中后序遍历
    tranversal(root.left,result);
    result.push(root.val);
    tranversal(root.right,result);
}
```

## 堆

二叉堆并不是最好的实现，保证父节点比子节点大或者小

### 完全二叉树

1. 索引为i的左孩子的索引是 2*i + 1
2. 索引为i的左孩子的索引是 2*i + 2
3. 索引为i的父节点的索引是floor((i-1)/2);

### 维护堆

1. 替换堆顶元素维护堆

```js
heapdown(){
    let heap = this.heap;
    // 找到小的替换上来
    for(let i = 0;i < heap.length - 1;){
        let leftIndex = 2*i + 1;
        let rightIndex = 2*i + 2;
        // 没有左右孩子
        if(leftIndex > heap.length && rightIndex >heap.length){
            break;
        }
        let minChildIndex = i;
        // 可能左或者右孩子不存在
        if(heap[leftIndex] && (heap[leftIndex].value < heap[minChildIndex].value)){
            minChildIndex = leftIndex;
        }
        if(heap[rightIndex] && (heap[rightIndex].value <heap[minChildIndex].value)){
            minChildIndex = rightIndex;
        }
        if(minChildIndex != i){
            this.swap(heap,minChildIndex,i);
            i = minChildIndex;
        }else{
            break;
        }
    }
}
```

2.增加堆中元素维护堆

```js
heapup(){
    let heap = this.heap;
    // 与父亲对比，如果比父亲小，则交换
    for(let i = heap.length - 1;i > 0;){
        let parentIndex = Math.floor((i - 1)/2);
        if(heap[i].value < heap[parentIndex].value){
            this.swap(heap,i,parentIndex);
            i = parentIndex;
        }else{
            break;
        }
    }
}
```

### 堆例题

1. 前 K 个高频元素  
<https://leetcode-cn.com/problems/top-k-frequent-elements/>

2. 最小的 k 个数  
<https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/>

3. 思考什么时候用大顶堆，什么时候用小顶堆；保留堆内元素还是弹出元素。堆大小K，时间复杂度O(nlog(k)),空间复杂度 O(k) 。

## 图

### 表示

1. 邻接矩阵（二维数组）
2. 邻接列表（字典）

### 点

1. 入度，出度
2. 点与点之间是否连通

### 边

1. 向边，无向边
2. 权重

### 层序遍历

使用队列先进先出的特性

```js
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
```

最短路径问题：  
层序遍历 + 优先队列

### 与树的区别

有环，遍历的时候注意判断节点是否访问过

### 
