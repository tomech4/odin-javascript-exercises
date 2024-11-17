// My solution
// const palindromes = function (a) {
//   function transformStr(a) {
//     let arr = [];
//     let x = a.toLowerCase();
//     for (let i = 0; i < x.length; i++) {
//       if (x[i].match(/[a-z]|[0-9]/)) {
//         arr.unshift(x[i]);
//       } else {
//         continue;
//       }
//     }
//     return mirroredResult = arr.join("");
//   }

//   function formatStr(a) {
//     let arr = [];
//     let x = a.toLowerCase();
//     for (let i = 0; i < x.length; i++) {
//       if (x[i].match(/[a-z]|[0-9]/)) {
//         arr.push(x[i]);
//       } else {
//         continue;
//       }
//     }
//     return formattedResult = arr.join("");
//   }
//   return formatStr(a) === transformStr(a);
// };

// Course's solution
const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cleanedString = string
  .toLowerCase()
  .split('')
  .filter((character) => alphanumerical.includes(character))
  .join('');

  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
