function getUnique(arr){
    return Array.from(new Set(arr));
}
console.log(getUnique([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8]));  
console.log(getUnique([]));                   
