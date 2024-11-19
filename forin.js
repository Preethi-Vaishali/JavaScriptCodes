const person = {name: 'Vaishu', age: 25, city: 'Coimbatore', state: 'Tamilnadu'};

for (let a in person) {
    console.log(a + ": " + person[a]);
    
    if (a === 'city') {
        break;
    }
}