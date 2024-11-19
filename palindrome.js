function isPalindrome(str) { 

    return str === str.split('').reverse().join(''); 
  
  }

  let s = 'madam';

  console.log(s+' is palindrome or not? '+isPalindrome(s));