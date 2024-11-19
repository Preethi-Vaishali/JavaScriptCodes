function revTable(n){
    for( let i=1; i<=10; i++){
    console.log(n+" * "+i+"= "+ n*i); 
    }

    console.log("");
    console.log("Odd Numbers:")
    for(let i=10; i>0; i--){
        const a = i*n;
        if(a%2!==0)
            console.log(a)

    }
}

revTable(3)

