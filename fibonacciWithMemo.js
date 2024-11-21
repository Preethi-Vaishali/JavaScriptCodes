function fibonacciWithMemoization(n) {
    let memo = [0, 1];
    for (let i = 2; i <= n; i++) {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
  
    return memo[n];
  }
  
  console.log(fibonacciWithMemoization(0));
  console.log(fibonacciWithMemoization(1));  
  console.log(fibonacciWithMemoization(5));  
  console.log(fibonacciWithMemoization(10)); 
  