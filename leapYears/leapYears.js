const leapYears = function (year) {
  if (year % 4 == 0) {
    return !(year % 100 == 0 && year % 400 != 0);
  } else {
    return false;
  }
};

module.exports = leapYears;
