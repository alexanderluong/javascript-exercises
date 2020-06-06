const removeFromArray = function (input, ...indicies) {
  let newArray = [];
  input.forEach((element) => {
    if (!indicies.includes(element)) newArray.push(element);
  });
  return newArray;
};

module.exports = removeFromArray;
