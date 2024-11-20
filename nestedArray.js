function findLargestElement(nestedArray) {

    if (nestedArray.length === 0 || nestedArray[0].length === 0) {
        return null;  
      }


    let largest = nestedArray[0][0];  
  
    for (let arr of nestedArray) {  
      for (let num of arr) {  
        if (num > largest) {  
          largest = num;  
        }
      }
    }
  
    return largest;  
  }

  const nestedArray = [
    [1, 5, 3],
    [7, 2, 9],
    [4, 8, 6]
  ];
  
  console.log(findLargestElement(nestedArray));  