function falsyValues(arr){
    return arr.filter(Boolean);
}
console.log(falsyValues([0, 1, false, 2, '', 3, NaN, 4, null])); 
console.log(falsyValues([false, "", undefined, null])); 
console.log(falsyValues([1, "hello", true, 42])); 
