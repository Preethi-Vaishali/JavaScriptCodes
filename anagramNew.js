function anagramNew(str1, str2){
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();
    const newStr1 = normalizedStr1.split('').sort().join('');
    const newStr2 = normalizedStr2.split('').sort().join('');
     return newStr1 === newStr2;
}
console.log(anagramNew("listen", "silent")); 
console.log(anagramNew("test", "toast"));     

