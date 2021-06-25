import 'jest';
import IHeroFacade from './HeroFacade.interface';
import HeroFacade from './index';

describe('HeroFacade', () => {
  let heroFacade: IHeroFacade;
  beforeAll(() => {
    heroFacade = new HeroFacade();
  });

  it('Should return a list of heros', async () => {
    const heros = await heroFacade.getHeros();
    expect(heros.payload.length).toBeGreaterThan(0);
  });

  it('Should return a hero', async () => {
    const hero = await heroFacade.getHero(1);
    expect(hero.payload).toBeDefined();
  });

  it('Should return a list of hero given a name', async () => {
    const name = 'Bruce Wayne';
    const heros = await heroFacade.filterHero(name);
    expect(heros.payload.length).toBeGreaterThan(0);
  });
});
