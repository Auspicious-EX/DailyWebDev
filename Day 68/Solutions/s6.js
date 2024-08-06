
// 6. The Vowel Counter:
// Create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

const str = "Hello World";
const vowels = 'aeiouAEIOU';
const vowelCount = Array.from(str).filter(char => vowels.includes(char)).length;
console.log(vowelCount);
