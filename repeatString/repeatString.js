const repeatString = function (string, repeatCount) {
  if (repeatCount < 0) return "ERROR";
  let output = "";
  for (let x = 0; x < repeatCount; x++) {
    output += string;
  }
  return output;
};

module.exports = repeatString;
