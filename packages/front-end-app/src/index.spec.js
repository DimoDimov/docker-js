const { expect, test } = require('@jest/globals');
const { greet } = require('./index');

test('greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});
