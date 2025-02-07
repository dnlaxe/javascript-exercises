const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((overall, num) => overall * num);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
  var answer = 1;
  for (let i = 1; i < number + 1; i++) {
    answer *= i;
  };
  return answer;
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
