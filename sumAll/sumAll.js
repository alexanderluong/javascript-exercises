const sumAll = function (start, end) {
  if (typeof start != "number" || typeof end != "number") return "ERROR";
  if (start < 0 || end < 0) return "ERROR";

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let total = 0;
  for (let x = start; x <= end; x++) {
    total += x;
  }
  return total;
};

module.exports = sumAll;
