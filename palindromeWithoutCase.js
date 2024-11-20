function isPalindrome(str) {
    const newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = newStr.split("").reverse().join("");
    return newStr === reversedStr;
  }
  console.log(isPalindrome("A man, a plan, a canal: Panama")); 
  console.log(isPalindrome("race a car"));
  console.log(isPalindrome("No lemon, no melon"));
  