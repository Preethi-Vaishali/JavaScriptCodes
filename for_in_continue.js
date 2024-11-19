const person= {name: 'Vaishu', age: 25, city: 'Coimbatore'}

for( let a in person){
     if(a === 'age'){
         continue;
   
    }
    console.log(a+': '+person[a]);

}
// const person = { name: 'Vaishu', age: 25, city: 'Coimbatore' };

// for (let a in person) {
//     a === 'age' ? null : console.log(a + ': ' + person[a]);
// }
