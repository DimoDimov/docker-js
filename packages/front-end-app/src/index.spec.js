import { expect, test } from '@jest/globals';
import greet from './index';

test('greeting', () => {
  expect(greet('Foo')).toBe('Hello, Foo');
});
