export default function getHeroHealthStatus(heroData) {
  return heroData.health <= 15 ? 'critical' : heroData.health <= 50 ? 'wounded' : 'healthy';
}