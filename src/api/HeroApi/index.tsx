import { HerosModel } from '../../models';
import { QueryResponse } from '../../types';
import IHeroApi from './HeroApi.interface';

class HeroApi implements IHeroApi {
  filterHero(name: string): Promise<QueryResponse> {
    const query = () =>
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve(
              HerosModel.filter(
                (hero) =>
                  hero.name.toLowerCase().indexOf(name.toLowerCase()) != -1 ||
                  hero.nickname.toLowerCase().indexOf(name.toLowerCase()) != -1
              )
            ),
          300
        )
      );
    return this.execQuery(query);
  }
  async getHeros(): Promise<QueryResponse> {
    const query = () =>
      new Promise((resolve) => setTimeout(() => resolve([...HerosModel]), 300));
    return this.execQuery(query);
  }
  async getHero(id: number): Promise<QueryResponse> {
    const query = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(HerosModel.find((hero) => id == hero.id)), 300)
      );
    return this.execQuery(query);
  }

  private async execQuery(query: () => Promise<any>): Promise<QueryResponse> {
    const data: any = await query();
    return {
      success: true,
      msg: 'success',
      status: 200,
      payload: data
    };
  }
}

export default HeroApi;
