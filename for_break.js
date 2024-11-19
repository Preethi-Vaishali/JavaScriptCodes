const numbers = [10, 20, 30, 40, 50, 60];

for(let i=0; i<numbers.length; i++){
    if(numbers[i] === 40){
        console.log('40 found at index :'+ i);
        break;
    }

    console.log(numbers[i]);
}