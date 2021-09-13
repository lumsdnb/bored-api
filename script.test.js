const formatPrice = require('./script');
it('checks low price range', () => {
  expect(formatPrice('0.2')).toBe('$');
});

it('check mid price', () => {
  expect(formatPrice('0.5')).toBe('$$');
});

it('check highest price', () => {
  expect(formatPrice('1')).toBe('$$$');
});
