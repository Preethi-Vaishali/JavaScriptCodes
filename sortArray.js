function sortArrayByKey(arr, key) {
    return arr.slice().sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
  }
  

  const objectsArray = [
    
    { name: 'Karthi', city: 'Coimbatore', age: 30 },
    { name: 'Teetto', city: 'Coimbatore', age: 26 },
    { name: 'Vaishu', city: 'Coimbatore', age: 25 }

  ];

  const sortedArray = sortArrayByKey(objectsArray, 'age');
  console.log(JSON.stringify(sortedArray,null,2));
 
  