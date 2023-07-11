const add = function(a, b) {
	return Number(a) + Number(b);
};

const subtract = function(a, b) {
	return Number(a) - Number(b);
};

const sum = function(array) { return array.reduce((total, currentValue) => total + currentValue, 0)};

const multiply = function(...args) {

  return args.reduce((total, currentValue) => total * currentValue, 0)};

const power = function() {
	return Number(a) ^ Number(b);
};

const factorial = function() {
	factorial(Number(a), Number(b));
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
