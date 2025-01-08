const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arrays) {
	return arrays.reduce((total, current) => total + current, 0);
};

const multiply = function(arrays) {
  return arrays.reduce((total, current) => total * current, 1);
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(n) {
	return (n <= 1 ? 1 : n* factorial(n-1));
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
