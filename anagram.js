// function areAnagrams(str1, str2) {
//     return str1.split("").sort().join("") === str2.split("").sort().join("");
//   }

//   console.log(areAnagrams("listen", "silent"));
//   console.log(areAnagrams("hello", "world"));   
  
function areAnagrams(str1, str2) {
    let newStr = (str) => str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").sort().join("");
    return newStr(str1) === newStr(str2)
  }
  console.log(areAnagrams("ListeN", "SilenT")); 
  console.log(areAnagrams("hello", "world"));  
  console.log(areAnagrams("Dormitory", "Dirty room"));  
  