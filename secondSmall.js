function secondSmallest(arr){
    const sortedArray = arr.sort((a,b) => a-b);
    return sortedArray[1];
}
console.log(secondSmallest([3, 9, 4, 1, 2]));
console.log(secondSmallest([5, 5, 5]));       
console.log(secondSmallest([42]));
