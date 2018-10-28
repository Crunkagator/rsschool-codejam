module.exports = function sumOfOther(arr) {
  return arr.length > 0 ? arr.map(x => arr.reduce((a, b) => a + b) - x) : new Error('No items');
};
