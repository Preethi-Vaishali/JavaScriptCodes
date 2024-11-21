function largeDiff(arr){
    if(arr.length < 2){
        return 0;
    }
    let min = arr[0];
    let maxDiff = 0;

    for( let i=1; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        else{
            const diff = arr[i] - min;
            if(diff > maxDiff){
                maxDiff = diff;
            }
        }
    }
    return maxDiff;
}
console.log(largeDiff([2, 3, 10, 2, 4, 8, 1])); 
console.log(largeDiff([7, 1, 5, 3, 6, 4]));    
console.log(largeDiff([7, 6, 4, 3, 1]));
