const a = 'The rain come soon i like rain i was wet in rain we need rain'
let count =0;
const words = a.split(' ');
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'rain') {
        count++;
        if(count == 2 )
        {
           console.log(`Index: ${i}, Value: ${words[i]}`);
        }
        
    }

}

