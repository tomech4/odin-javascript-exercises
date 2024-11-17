const fibonacci = function (number) {
  // we need a function that will create sequence of fibonaci numbers
  // write it down to an Array
  // and by providing a number it would provide a correct number from fibonaci array, which means substracting 1 from request fibonaci position as array starts from 0
  // also the input must be always a number

  const fibonacciArray = [0, 1];
  for (let i = 2; i < 100; i++) {
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
  }
  if (typeof number === 'number') {
    if (number < 0) {
        return "OOPS"
    }
    else {return fibonacciArray[number];}
  }
  if (typeof number === 'string') {
    return fibonacciArray[Number(number)];
  }
  
};

// Do not edit below this line
module.exports = fibonacci;
