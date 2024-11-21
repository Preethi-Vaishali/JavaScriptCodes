function arrayAverage(num){
    // if(num.length === 0){
    //     console.log("Empty Array");
    // }
    // let sum=0;
    // for (let n of num){
    //     sum += n;
    // }
    // return sum/num.length
    const sum = num.reduce((total, n) => total + n, 0);
    return sum / num.length;
}
console.log(arrayAverage([1, 2, 3, 4, 5]));
console.log(arrayAverage([]));