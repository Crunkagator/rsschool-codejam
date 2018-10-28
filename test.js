const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./sumOfOther.js');
const make = require('./make.js');

describe('Tests:', () => {
  describe('Tests for sumOfOther.js:', () => {
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

    it('Should throw an error when there is no array items', () => {
      const arr = [];
      const sum = sumOfOther(arr);
      assert.deepEqual(sum, Error('No items'));
    });
  });

  describe('Tests for make.js', () => {
    it('Should throw an error when there is no array items before the reducer', () => {
      const sum = (a, b) => a + b;
      const maketest = make(sum);
      assert.deepEqual(maketest, Error('No args were passed for the reducer'));
    });

    it('Should return a proper result scenario 2', () => {
      const sum = (a, b) => a + b;
      const maketest = make(1)(2)(3, 4)(sum);
      assert.deepEqual(maketest, 10);
    });

    it('Should return a proper result scenario 3', () => {
      const mul = (a, b) => a * b;
      const maketest = make(10)(2, 4, 7)(mul);
      assert.deepEqual(maketest, 560);
    });

    it('Should return a proper result scenario 4', () => {
      const sub = (a, b) => a - b;
      const maketest = make(193)(2, 71)(80)(-6)(sub);
      assert.deepEqual(maketest, 46);
    });

    it('Should return a proper result scenario 5', () => {
      const div = (a, b) => a / b;
      const maketest = make(10000)(2, 5)(4)(-2)(div);
      assert.deepEqual(maketest, -125);
    });

    it('Should return a proper result scenario 6', () => {
      const sum = (a, b) => a + b;
      const maketest = make(-5)(2, 5)(4)(-82)(sum);
      assert.deepEqual(maketest, -76);
    });

    it('Should return a proper result scenario 7', () => {
      const mul = (a, b) => a * b;
      const maketest = make(1, 4, -5, 0.5)(6)(mul);
      assert.deepEqual(maketest, -60);
    });

    it('Should return a proper result scenario 8', () => {
      const sub = (a, b) => a - b;
      const maketest = make(1, 5, 2)(-6, 6, 3)(sub);
      assert.deepEqual(maketest, -9);
    });
  });
});
