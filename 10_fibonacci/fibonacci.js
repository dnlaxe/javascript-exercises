const fibonacci = function(position) {

  let num
  if (typeof position !== 'number') {
    num = parseInt(position);
  } else {
    num = position;
  };
  
  let firstNumber = 0;
  let secondNumber = 1;
  
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (num < 0) return 'OOPS';
  
  for (let i = 2; i <= num; i++) {
    thirdNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
  }

  return thirdNumber;
};

// Do not edit below this line
module.exports = fibonacci;
