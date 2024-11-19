    // function patRev(n){
    //     for (let i = n; i >= 1; i--) {
    //         for (let j = 1; j <= i; j++) {
    //             console.log("*")
    //         }
    //         console.log('')
    //     }
    // }
    // (patRev(6));

    function patRev(n) {
        for (let i = n; i >= 1; i--) {
            console.log("*".repeat(i));
        }
    }
    
    patRev(6);

    // function patRev(n) {
    //     for (let i = n; i >= 1; i--) {
    //         let row = ""; // Initialize an empty string for the row
    //         for (let j = 1; j <= i; j++) {
    //             row += "*"; // Add '*' to the row string
    //         }
    //         console.log(row); // Print the entire row
    //     }
    // }
    
    // patRev(6);
    