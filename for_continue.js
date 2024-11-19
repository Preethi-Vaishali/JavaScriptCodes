console.log('Odd Numbers are: ');
for(let i=10; i>0; i--){
    if(i%2 === 0){
        continue;
    }
    console.log(i);
}
console.log();
console.log();
console.log('Even Numbers are: ');
for(let j=10; j>0; j--){
    if (j % 2 !== 0){
        continue;
    }
    console.log(j);
}