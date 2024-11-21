function arraySum(arr){
    return arr.reduce((total, num) => total + num , 0);
}
console.log(arraySum([1, 2, 3, 4, 5])); 
console.log(arraySum([-1, -2, -3, -4, -5])); 
console.log(arraySum([])); 
