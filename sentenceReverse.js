function reverseSentence(sen){
    const word = sen.split(' ');
    const reversedWord = [];
    for (let i= word.length -1; i>=0; i--){
        reversedWord.push(word[i]);
    }
    return reversedWord.join(' ');
}
console.log(reverseSentence("My Standards are high")); 
console.log(reverseSentence("SingleWord")); 

