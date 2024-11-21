function maxArray(arr){
    if(arr.length === 0){
        console.log("Empty ARray.")
    }
    let max = arr[0];
    for( let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(maxArray([3, 1, 4, 1, 5, 9])); 
console.log(maxArray([-10, -20, -3]));    
console.log(maxArray([]));               
