const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./sumOfOther.js');

describe('Tests', () => {
  it('Should return a proper result for a given array 1', () => {
    const arr = [1, 2, 3, 4, 5];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, [14, 13, 12, 11, 10]);
  });

  it('Should return a proper result for a given array 2', () => {
    const arr = [-2, 2, 3, -3, 5, -5];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, [2, -2, -3, 3, -5, 5]);
  });

  it('Should return a proper result for a given array 3', () => {
    const arr = [4, 3, 23, 5, 1, 12];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, [44, 45, 25, 43, 47, 36]);
  });

  it('Should return a proper result for a given array 4', () => {
    const arr = [];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, []);
  });

  it('Should return a proper result for a given array 5', () => {
    const arr = [0, 0, 0, 1, 0];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, [1, 1, 1, 0, 1]);
  });

  it('Should return a proper result for a given array 6', () => {
    const arr = [-84, 27, 13, 143, 55];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, [238, 127, 141, 11, 99]);
  });

  it('Should return a proper result for a given array 7', () => {
    const arr = [13, 84, 46, 57];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, [187, 116, 154, 143]);
  });

  it('Should return a proper result for a given array 8', () => {
    const arr = [52, 32, 8, 2, -3, 71, -2];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, [108, 128, 152, 158, 163, 89, 162]);
  });

  it('Should return a proper result for a given array 9', () => {
    const arr = [44, 81, 11, 22, 3, 5, 17, 19];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, [158, 121, 191, 180, 199, 197, 185, 183]);
  });

  it('Should return a proper result for a given array 10', () => {
    const arr = [109, 4];
    const sum = sumOfOther(arr);
    assert.deepEqual(sum, [4, 109]);
  });
});
