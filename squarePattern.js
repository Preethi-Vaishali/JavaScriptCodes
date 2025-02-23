const a =5;
for (let i=1; i<=a; i++){
    for (let j=1; j<=7; j++){
        if( i==3 && j==4 ){
            process.stdout.write("@"+ " ");
        }
        else{
            process.stdout.write(j + " ");
        }
        
    }
    console.log();
}