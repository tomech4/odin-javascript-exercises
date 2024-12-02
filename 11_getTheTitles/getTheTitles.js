const getTheTitles = function(a) {
// create a new array
let result = [];
// create a loop that
for (i = 0; i < a.length; i++) {
    result.push(a[i].title)
}
return result;
// will take length of the array of objects
// go through every array
// take title of array Element
// put it into the result array
// return result
};

//// course solution
// const getTheTitles = function (array) {
//     return array.map((book) => book.title);
//   };
  

// Do not edit below this line
module.exports = getTheTitles;
