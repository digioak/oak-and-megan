function merge(arr1, arr2){
  let returnArr = [];
  
  if (arr1.length === 0) return returnArr.concat(arr2);
  if (arr2.length === 0) return returnArr.concat(arr1);
  
  let arr1Head = arr1[0];
  let arr2Head = arr2[0];
  
  while(true){
    if (arr1Head < arr2Head) {
      returnArr.push(arr1.shift());
      if (arr1.length === 0) return returnArr.concat(arr2);
      arr1Head = arr1[0];
    } else {
      returnArr.push(arr2.shift());
      if (arr2.length === 0) return returnArr.concat(arr1);
      arr2Head = arr2[0];
    }
  }
  
  return returnArr;
}