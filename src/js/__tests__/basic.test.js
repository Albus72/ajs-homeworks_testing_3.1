// import sum from '../basic';

// test('should sum', () => {
//   const result = sum([1, 2, 3]);

//   expect(result).toBe(6);
// });

import getHeroHealthStatus from '../basic';

test ('should health', () => {
  const result = getHeroHealthStatus({name: 'Маг', health: 90});
  expect(result).toBe('healthy');
})

//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
