// export default function sum(items) {
//   let result = 0;
//   for (const item of items) {
//     result += item;
//   }
//   return result;
// }

const heroData = {name, health}
export default function getHeroHealthStatus(heroData) {
  let healthStatus;
  if (heroData.health > 50) {
    healthStatus = 'healthy';
  } else if (15 < heroData.health <= 50) {
    healthStatus = 'wounded';
  } else if (heroData.health <= 15) {
    healthStatus = 'critical';
  }
  return healthStatus;
}