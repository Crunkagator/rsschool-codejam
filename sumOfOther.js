module.exports = function sumOfOther(arr) {
  return arr.map(x => arr.reduce((a, b) => a + b) - x);
};
