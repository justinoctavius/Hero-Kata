import HeroProxy from '.';
import { HeroApi, IHeroApi } from '../../api/HeroApi/';
import { HerosModel } from '../../models';

describe('HeroProxy', () => {
  let heroProxy: IHeroApi;
  beforeAll(() => {
    heroProxy = new HeroProxy(new HeroApi());
  });
  it('Should return a "Id cannot be empty" message in getHero', async () => {
    const expected = 'Id cannot be empty';
    const result = await heroProxy.getHero('');
    expect(result.message).toBe(expected);
  });
  it('Should return a "Status cannot be empty" message in findByStatus', async () => {
    const expected = 'Status cannot be empty';
    const result = await heroProxy.findByStatus('');
    expect(result.message).toBe(expected);
  });
  it('Should return a "Fields cannot be empty" message in addHero', async () => {
    const expected = 'Fields cannot be empty';
    const resultName = await heroProxy.addHero({ ...HerosModel[0], name: '' });
    expect(resultName.message).toBe(expected);
  });
  it('Should return a "Fields cannot be empty" message in updateHero', async () => {
    const expected = 'Fields cannot be empty';
    const resultName = await heroProxy.updateHero('1', {
      ...HerosModel[0],
      name: ''
    });
    expect(resultName.message).toBe(expected);
  });
  it('Should return a "Id cannot be empty message in deleteHero', async () => {
    const expected = 'Id cannot be empty';
    const result = await heroProxy.deleteHero('');
    expect(result.message).toBe(expected);
  });
});
