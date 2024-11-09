const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};


const sum = function (a) {
  let x = a;
  if (x.length === 0) {
    return x = 0;
  }
  else {
    return x.reduce((total, nextValue) => total + nextValue)
  }
}

const multiply = function (a) {
  return a.reduce((total, current) => total * current);
};

const power = function (a, b) {
  let x = a;
  for (i = 0; i < b - 1; i++) { // "b - 1" is due to the fact that we already have first iteration equal to paramether "a"
    a *= x;
  }
  return a;
};


const factorial = function (a) {
  let x = a;
  if (a === 0) {
    return 1;
  }
  else {
    for (i = x - 1; i > 0; i--) { // same as for multiplication, "x - 1" is for offseting the fact that we already have first value of iteration simply from given value
      x *= i;
    }
    return x;
  }
};
factorial(2);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
