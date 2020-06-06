const ftoc = function (degrees) {
  return parseFloat((((degrees - 32) * 5) / 9).toFixed(1));
};

const ctof = function (degrees) {
  return parseFloat(((degrees * 9) / 5 + 32).toFixed(1));
};

module.exports = {
  ftoc,
  ctof,
};
