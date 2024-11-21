function duplicate(arr){
    return Array.from(new Set(arr));
}
console.log(duplicate([12, 22, 12, 23, 24, 43, 55, 43, 24, 80])); // Output: [1, 2, 3,
