const add = function(a, b) {
	return Number(a) + Number(b);
};

const subtract = function(a, b) {
	return Number(a) - Number(b);
};

const sum = function(array) { return array.reduce((total, currentValue) => total + currentValue, 0)};

const multiply = function(...args) {

  return args.reduce((total, currentValue) => total * currentValue, 1)};

const power = function(a, b) {
	return Number(a) ** Number(b);
};

const factorial = function(a) {
	let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
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
  factorial
};
