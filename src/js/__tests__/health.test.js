import showHealth from '../health';

test('check green', () => {
  expect(showHealth({name: 'Маг', health: 90})).toBe('healthy');
});

test('check yellow', () => {
  expect(showHealth({name: 'Маг', health: 45})).toBe('wounded');
});

test('check red', () => {
  expect(showHealth({name: 'Маг', health: 10})).toBe('critical');
});
