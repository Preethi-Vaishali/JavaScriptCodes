function groupByCondition(arr, condition) {
    return [
      arr.filter(element => condition(element)),    
      arr.filter(element => !condition(element))    
    ];
  }

console.log(groupByCondition([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0));
console.log(groupByCondition([-1, 2, 3, -4, 5, -6], (num) => num > 0));
console.log(groupByCondition(["apple", "pear", "kiwi", "banana"], (str) => str.length > 4));


  