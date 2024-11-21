function findSecondLargest(arr) {
    if (arr.length < 2) {
      console.log("Empty Array")
    }
  
    arr.sort((a, b) => b - a); 
    return arr[1];
  }
console.log(findSecondLargest([10, 20, 4, 45, 99])); 
console.log(findSecondLargest([3, 1, 4, 1, 5])); 