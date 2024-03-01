Storage.prototype.getItem = jest.fn(() => 'bla');

test('jest test', () => {
  expect(1 + 1).toBe(2);
});