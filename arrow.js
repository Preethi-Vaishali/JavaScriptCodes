const a =5;
for (let i=1; i<=a; i++){

    for(let space=0; space<=a-i; space++){

        process.stdout.write(" ");
    }

    for (let j=1; j<=i; j++){
            
        process.stdout.write(j + " ");
        
    }

    console.log();
}
for( let i=2; i<=a; i++){
    for(let space=a; space>=a-1; space--){
        process.stdout.write(" ");
    }
    for (let j=1; j<a; j++){
            
        process.stdout.write(j + " ");
        
    }

    console.log();
}