function toTitleCase(str) { 
    return str.replace(/\b\w/g, l => l.toUpperCase()); 
  }
  
  const inputString = "hey i am not intrested in this property";
  const titleCaseString = toTitleCase(inputString);
  console.log(titleCaseString);  
  