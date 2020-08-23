// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// // 因为存在单调性
// // 首先找到顺序倒转的位置
// // 根据这个位置两边进行二分查找
// // 数组进行倒转，后面的数肯定比前面的数小
// var search = function(nums, target) {
//   if(!nums || !nums.length){
//     return -1;
//   }
//   // 找到第一次的中间点
//   let gmid = 0;
//   if(nums.length > 2){
//     let left  = 0; right = nums.length;
//     while(right >= left){
//       debugger
//         // 求中间值
//         let mid = left + Math.floor((right - left)/2);
//         // 这里需要判断下数组的长度
//         if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]){
//             gmid = mid;
//             break;
//         }
//         // 证明现在在右边，需要抛弃右边的，往左边搜索
//         if(nums[mid] <= nums[0]){
//             left = mid + 1;
//         }else if(nums[mid] > nums[0]){
//             right = mid - 1;
//         }
//     }
//   }

//   console.log('gmid',gmid);

//   let l;
//   let r;
//   // 对右边进行二分搜索
//   if(target >= nums[gmid + 1] && target <= nums[nums.length - 1]){
//     l = gmid + 1; r = nums.length;
//   }else if(target >= nums[0] && target <= nums[gmid]){
//     l = 0; r = gmid;
//   }
//   if(l != undefined && r != undefined){
//     while(r >= l){
//       // 求中间值
//       let mid = l + Math.floor((r - l)/2);
//       if(nums[mid] === target) return mid;
//       if(nums[mid] < target){
//         l = mid + 1;
//       }
//       if(nums[mid] > target){
//         r = mid - 1;
//       }
//     }
//   }
//   return -1;
// };

// console.log(search([5,1,3],3));