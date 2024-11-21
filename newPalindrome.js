function isPalindrome(str){
    const newStr = str.replace(/[^\w]/g, "").toLowerCase();
    const reverseStr = newStr.split("").reverse().join("");
    return newStr === reverseStr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("is this a quite place?"));
console.log(isPalindrome("No 'x' in Nixon"));
