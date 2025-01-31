function cariMedian(arr) {
    // you can only write your code here!
    let sortArr = arr.sort((a, b) => a - b), mid = sortArr.length/2;
    if(sortArr.length % 2 == 0){
        return (sortArr[mid-1] + sortArr[mid]) / 2;
    }else{
        return sortArr[Math.floor(mid)];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5