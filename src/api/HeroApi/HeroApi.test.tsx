import 'jest';
import { HerosModel } from '../../models';
import { QueryResponse } from '../../types';
import IHeroApi from './HeroApi.interface';
import HeroApi from './index';

const herosExpected = [...HerosModel];

describe('HeroApi', () => {
  let heroApi: IHeroApi;
  let heroResponse: QueryResponse;
  beforeAll(async () => {
    heroApi = new HeroApi();
    heroResponse = await heroApi.getHero(1);
  });

  it('Should return a list of heros', async () => {
    const herosResponse = await heroApi.getHeros();
    const expected: string = JSON.stringify(herosExpected);
    expect(JSON.stringify(herosResponse.payload)).toBe(expected);
  });

  it('Should return a hero', () => {
    const expected: string = JSON.stringify(
      herosExpected.find((hero) => hero.id === 1)
    );
    expect(JSON.stringify(heroResponse.payload)).toBe(expected);
  });

  it('Should return a hero by the name', async () => {
    const name = 'Bruce Wayne';
    const expected: string = JSON.stringify(
      HerosModel.find((hero) => hero.name == name)
    );
    const heroResponse: QueryResponse = await heroApi.getByName(name);
    expect(JSON.stringify(heroResponse.payload)).toBe(expected);
  });

  it('Should return a success msg', () => {
    const expected: string = 'success';
    expect(heroResponse.msg).toBe(expected);
  });

  it('Should return a success true', () => {
    const expected: boolean = true;
    expect(heroResponse.success).toBe(expected);
  });

  it('Should return a status 200', () => {
    const expected: number = 200;
    expect(heroResponse.status).toBe(expected);
  });
});
