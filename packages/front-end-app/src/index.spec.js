const { expect, test } = require('@jest/globals');
const { greet } = require('./index');

test('greeting', () => {
  expect(greet('Ben')).toBe('Hello, Ben');
});
