const reverseString = function (inputString) {
  let splitString = inputString.split();
  let reversedString = "";
  for (let x = 0; x < inputString.length; x++) {
    reversedString += inputString[inputString.length - x - 1];
  }
  return reversedString;
};

module.exports = reverseString;
