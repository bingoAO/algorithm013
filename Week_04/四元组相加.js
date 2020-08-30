/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let result = [];
  let pushed = {};
  const calcSums = (sums) => {
      let total= 0;
      for(let i = 0;i<sums.length;i++){
          total = sums[i] + total;
      }
      // console.log('total',total);
      return total;
  }
  const findFourNums = (index,sums) => {
      if(sums.length === 4 && calcSums(sums) === target){
        // console.log('xxxx')
        let sorted = sums.sort((a,b)=>{return a-b});
        if(!pushed[sorted.join('_')])
          result.push(sums);
          pushed[sorted.join('_')] = true;
      }
      if(sums.length === 4){
          return;
      }
      let used = {};
      for(let i = index;i < nums.length;i++){
        // debugger
        if(!used[nums[i]]){
          used[nums[i]] = true;
        }else{
          continue;
        }
        console.log('nums',index,nums[i]);
          let tmp = sums.concat(nums[i]);
          console.log('tmp',tmp,sums);
          findFourNums(i + 1,tmp);
          findFourNums(i + 1,[...sums]);
      }
  }
  findFourNums(0,[]);
  return result;
};

// const nums = [0,0,0,1,0];
const nums = [7,7,-1,-5,2,-2,8,-8,-10,0,1,-4,-1,4,-6,5,4]
const target = -21
// const nums = [1, 0, -1, 0, -2, 2];
// const target = 0
console.log(fourSum(nums,target));
