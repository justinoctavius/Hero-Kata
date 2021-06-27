import 'jest';
import IHeroFacade from './IHeroFacade';
import HeroFacade from './HeroFacade';

describe('HeroFacade', () => {
  let heroFacade: IHeroFacade;
  beforeAll(() => {
    heroFacade = new HeroFacade();
  });

  it('Should return a list of match heros given a status', async () => {
    const result = await heroFacade.filterHero({ status: 'alive' });
    expect(result.payload.length).toBeGreaterThan(0);
  });
});
