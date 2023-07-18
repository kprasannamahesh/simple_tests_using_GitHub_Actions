const { add } = require('../src/addtion');

describe('addition', () => {
  test('adds two numbers correctly', () => {
    const result = add(3, 5);
    expect(result).toBe(8);
  });

  test('returns zero when adding zero to a number', () => {
    const result = add(10, 0);
    expect(result).toBe(10);
  });

  test('returns the same number when adding zero', () => {
    const result = add(0, 7);
    expect(result).toBe(7);
  });

  // Add more test cases as needed
});
