function findVowels(input) {
    const vowels = /[aeiou]/gi;
    const matches = input.match(vowels);
    return matches ? matches : "No vowels found";
}
const str = "Code Execution Successful";
console.log(findVowels(str)); 