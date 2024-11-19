function generateFibonacci(n) {
    if (n <= 0) {
      return []; 
    }
  
    if (n === 1) {
      return [0];
    }
  
    let fibonacci = [0,1];
  
    for (let i = 2; i < n; i++) {
      
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  
    return fibonacci;
  }

console.log(generateFibonacci(5));  
console.log(generateFibonacci(10)); 
console.log(generateFibonacci(1));  
console.log(generateFibonacci(0)); 