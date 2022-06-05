import getHeroHealthStatus from '../basic';

test ('should health', () => {
  const result = getHeroHealthStatus({name: 'Маг', health: 90});
  expect(result).toBe('healthy');
})
