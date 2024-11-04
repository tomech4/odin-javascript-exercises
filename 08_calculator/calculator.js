const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a, b) {
  if (a === undefined || b === undefined) {
    return 0;
  } else {
    let result = a;
    for (i = 0; i < b; i++) {
      result += i;
    }
    return result;
  }
};

const multiply = function (...numbers) {
  result.reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = function (a, b) {
  for (i = 0; i < b; i++) {
    a *= a;
  }
  return a;
};

const factorial = function (a) {
  let result = a;
  for (i = a - 1; i > 0; i--) {
    result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
