function toTitleCase(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
  }
  
  console.log(toTitleCase("hello world")); 
  console.log(toTitleCase("welcome to javascript")); 
  