function smallLarge(arr){
    if (arr.length === 0) {
        return [null, null]; 
      }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return[min,max];

}
console.log(smallLarge([3, 1, 9, 7, 5])); 
console.log(smallLarge([-10, 0, 50, 20])); 
console.log(smallLarge([100])); 
