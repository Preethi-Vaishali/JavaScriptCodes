function mergeArray(arr1, arr2){
    const mergedArray = [];

    const maxLength = Math.max(arr1.length, arr2.length);

    for(let i=0; i<maxLength; i++){
        if(i < arr1.length)mergedArray.push(arr1[i]);
        if(i < arr2.length)mergedArray.push(arr2[i]);
    }
    return mergedArray;
}
console.log(mergeArray([1, 2, 3], [4, 5, 6]));  
console.log(mergeArray([1, 2], [3, 4, 5, 6]));  
console.log(mergeArray([1, 2, 3], []));         
console.log(mergeArray([], [4, 5, 6]));
