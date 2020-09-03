// 待整理
// var jump = function(nums) {
//   if(nums.length === 0) return 0;
//   if(nums.length === 1) return 0;

//   let result = 0;
//   let final =  nums.length - 1;
//   let cache = {};
//   const minCount = (nums,currentSteps,depth) => {
//       let min = Infinity;
//       // debugger
//       for(let i = 1;i<=nums[depth];i++){
//           let tmp = currentSteps + i;
//           // 如果加上前面累计的能够跳转到最后一步，则当前一次到达，否则计算当前的最小次数
//           if(tmp === final){
//               cache[depth + "_" + currentSteps] = 1;
//               return 1;
//           }
//           if(tmp < final){
//             if(cache[depth + i + "_" + currentSteps]){
//               min = Math.min(min,cache[depth + i + "_" + currentSteps]);
//             }else{
//               let minNext = minCount(nums,tmp,depth + i);
//               min = Math.min(min,1 + minNext);
//             }
//           }
//           if(tmp > final)break;
//       }
//       cache[depth + "_" + currentSteps] = min;
//       return min;
//   }
//   result = minCount(nums,0,0,0);
//   // console.log('cache',cache);
//   return result;
// };

var jump = function(nums) {
  if(nums.length <= 1) return 0;
  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  // debugger
  for(let i = 2;i<nums.length;i++){
    if(!arr[i]){
      arr[i] = Infinity;
    }
    for(let j = 0;j<i;j++){
      if(nums[j] >= i - j){
        arr[i] = Math.min(arr[i],arr[j] + 1);
      }
    }
  }
  return arr[arr.length-1];
};

// [2,3,1,1,4,4,2,1,1,1,1,13,2]
console.log(jump([2,3,1,1,4]));