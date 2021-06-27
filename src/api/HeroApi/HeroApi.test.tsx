import { HerosModel } from '../../models';
import { ApiResponse } from '../../types';
import IHeroApi from './IHeroApi';
import HeroApi from './HeroApi';

describe('HeroApi', () => {
  let heroApi: IHeroApi;
  beforeAll(async () => {
    heroApi = new HeroApi();
  });

  it('Should return a list of heros', async () => {
    const herosResponse = await heroApi.getHeros();
    expect(herosResponse.payload.length).toBeGreaterThan(0);
  });

  it('Should return a hero', async () => {
    const heroResponse = await heroApi.getHero('1');
    expect(heroResponse.payload).toBeDefined();
  });

  it('Should return a list of hero given a status', async () => {
    const status = 'alive';
    const heroResponse = await heroApi.findByStatus(status);
    expect(heroResponse.payload.length).toBeGreaterThan(0);
  });

  it('Should add a new hero', async () => {
    const expected: ApiResponse = {
      code: 200,
      message: 'success',
      type: 'post',
      payload: { ...HerosModel[0] }
    };
    const result: any = await heroApi.addHero({ ...HerosModel[0] });
    expect(result.payload).toStrictEqual(expected.payload);
    expect(result.code).toBe(expected.code);
    expect(result.message).toBe(expected.message);
    expect(result.type).toBe(expected.type);
  });

  it('Should update a hero', async () => {
    const expected: ApiResponse = {
      code: 200,
      message: 'success',
      type: 'put',
      payload: { ...HerosModel[0] }
    };
    const result: any = await heroApi.updateHero('1', { ...HerosModel[0] });
    expect(result.payload).toStrictEqual(expected.payload);
    expect(result.code).toBe(expected.code);
    expect(result.message).toBe(expected.message);
    expect(result.type).toBe(expected.type);
  });

  it('Should delete a hero', async () => {
    const expected: ApiResponse = {
      code: 200,
      message: 'success',
      type: 'delete',
      payload: {}
    };
    const result: any = await heroApi.deleteHero('1');
    expect(result.payload).toBeDefined();
    expect(result.code).toBe(expected.code);
    expect(result.message).toBe(expected.message);
    expect(result.type).toBe(expected.type);
  });
});
