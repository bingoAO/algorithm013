/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let freqmap = {};
  // 统计频次 {数字：频次}
  for(let i = 0;i<nums.length;i++){
      let key = nums[i];
      if(freqmap[key]){
          freqmap[key]++
      }else{
          freqmap[key] = 1;
      }
  }
  // 如果小于k个，直接返回
  if(Object.keys(freqmap).length <= k){
      return Object.keys(freqmap);
  }
  let heap = new Heap();
  let index = 0;
  // 对map进行数组化，构建小顶堆，按照频次排序，堆的元素维护在k个，超过k个之后，如果大于堆顶，则与堆顶交换，否则，不用处理，最后输出这个堆
  for(key in freqmap){
      let ele = {name:key,value:freqmap[key]};
      if(index < k){
          heap.add(ele)
      }else{
          if(heap.get()[0].value < ele.value){
              heap.replaceTop(ele);
          }
      }
      index++;
  }
  return heap.get().map(function(el){return el.name})
};

class Heap {
  constructor(){
      this.heap = [];
  }
  get(){
      return this.heap;
  }
  add(ele){
      let heap = this.heap;
      heap.push(ele);
      this.heapup();
  }
  replaceTop(ele){
      this.heap[0] = ele;
      this.heapdown();
  }
  swap(heap,i,j){
      let temp = heap[j];
      heap[j] = heap[i];
      heap[i] = temp;
  }
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
}