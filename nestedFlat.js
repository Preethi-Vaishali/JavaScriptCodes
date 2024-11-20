const flattenArray = (nestedArray) => {
    const result = [];
    for (const item of nestedArray) {
      if (Array.isArray(item)) {
        result.push(...flattenArray(item));
      } else {
        result.push(item);
      }
    }
    return result;
  };
  console.log(flattenArray([1, [2, [3, [4, 5]], 6], 7])); 
  