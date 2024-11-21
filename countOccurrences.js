function countChar(str){
    let count={};
    str = str.toLowerCase();
    for (let char of str){
        count[char] = (count[char] || 0)+1;
    }
    return count;
}
console.log(countChar("")); 
console.log(countChar("Abracadabra")); 
