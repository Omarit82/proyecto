const { suma } = require('./index');

test('suma de 7 y 3 es 10', () => {
  expect(suma(7, 3)).toBe(10);
});