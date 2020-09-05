var longestCommonSubsequence = function(text1, text2) {
  let arr = [];
  for(let i = 0;i<=text1.length;i++){
      let row = new Array(text2.length + 1);
      row[0] = 0;
      arr.push(row);
  }

  for(let i = 0;i<arr[0].length;i++){
      arr[0][i] = 0;
  }

  for(let i = 1;i<=text1.length;i++){
      for(let j = 1;j<=text2.length;j++){
          // console.log('xxx',text1[i-1],text2[j-1]);
          if(text1[i-1] === text2[j-1]){
            // 这个不能直接用preMax 会进行累计
            arr[i][j] = arr[i-1][j-1] + 1;
          }else{
            let preMax = Math.max(arr[i-1][j-1],arr[i][j-1],arr[i-1][j]);
            arr[i][j] = preMax;
          }
      }
  }
  // console.log('arr',arr);
  return arr[text1.length][text2.length];
};
console.log(longestCommonSubsequence("a","aa"))