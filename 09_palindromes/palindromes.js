const palindromes = function () {
// from the definition of palidrome: 
// "A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks"
// so, this is what we would want to do:
// - take a string;
// - stripe all special characters
// - remove spaces
// - change all symbols to lower case
// - save the string that we end up with
// - create a new variable
// - create a loop:
//     - take each symbol of original string starting from the end
//     - write push||shift taken symbol into new string variable in the beginning
//     - and continue doing it until we reach the end of original string
// - compare original and new string with "==="
//     - if the same, return true
//     - if different, return false
};

// Do not edit below this line
module.exports = palindromes;
