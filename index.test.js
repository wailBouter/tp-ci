const { sum, multiply, divide } = require('./index');

describe('Test all function inside of index file', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('multiply 2 * 2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('divide 2 / 2 to equal 1', () => {
    expect(divide(2, 2)).toBe(1);
  });
});
