// 双指针
// 1.一个指针指向要被替换的位置 j
// 2.一个指针指向拿去替换的元素
var removeDuplicates = function(nums) {
    let j = 0;
    let l = nums.length;
    for(let i = 1;i<l;i++){
       if(nums[i] != nums[i-1]){
           j++;// 什么时候++
           nums[j] = nums[i]; // 什么时候替换
       }
    }
    return j+1;
};