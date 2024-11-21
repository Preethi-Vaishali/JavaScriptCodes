function isPalindrome(str){
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("Racecar")); 
console.log(isPalindrome("hello"));   