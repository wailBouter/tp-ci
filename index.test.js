const { sum, multiply, divide } = require('./src/calc');

describe('Test all function inside of index file', () => {
  describe('Tests for function sum', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });

    test('adds 22 + 2 to equal 24', () => {
      expect(sum(22, 2)).toBe(24);
    });
  });

  describe('Tests for function multiply', () => {
    test('multiply 2 * 2 to equal 4', () => {
      expect(multiply(2, 2)).toBe(4);
    });

    test('multiply 0 * 2 to equal *', () => {
      expect(multiply(0, 2)).toBe(0);
    });
  });

  describe('Tests for function multiply', () => {
    test('divide 2 / 2 to equal 1', () => {
      expect(divide(2, 2)).toBe(1);
    });

    test('divide 0 / 2 to equal 0', () => {
      expect(divide(0, 2)).toBe(0);
    });
  });
});
