const a = 'The rain come soon i like rain i was wet in rain we need rain';
const words = a.split(' '); 
const reversedWords = [];

for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
}

console.log(reversedWords.join(' '));


