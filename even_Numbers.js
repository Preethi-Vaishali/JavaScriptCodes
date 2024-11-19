function filterEvenNumbers() { 

    return (num) => num % 2 === 0; 
  
  }

  const arr = [3,7,50,22,11,4,6,8,21];
  
  console.log('Array 2: '+ arr.filter(filterEvenNumbers(arr)));