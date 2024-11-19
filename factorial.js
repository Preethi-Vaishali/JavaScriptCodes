 const a =5;
 const result = factorial(a);
 console.log(`The factorial of ${a} is ${result}.`);

 
  function factorial(n) {
    
    if (n < 0) {
        return 'Factorial is not defined for negative numbers.';
    }

    let result = 1; 
    for (let i = 1; i <= n; i++) {
        result *= i; 
    }

    return result;
}





// function factorial(number) { 

//     if (number === 0 || number === 1) { 
  
//       return 1; 
  
//     } else { 
  
//       return number * factorial(number - 1); 
  
//     } 
  
//   }


// function name(n){
//     if(n===0 || n===1){return 1}
//     return n* name(n-1)
// }
// console.log (name(5))