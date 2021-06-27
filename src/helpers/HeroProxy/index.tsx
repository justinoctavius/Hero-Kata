import IHeroApi from '../../api/HeroApi/IHeroApi';
import { Hero, ApiResponse } from '../../types';

class HeroProxy implements IHeroApi {
  private heroApi: IHeroApi;

  constructor(heroApi: IHeroApi) {
    this.heroApi = heroApi;
  }

  async getHeros(): Promise<ApiResponse> {
    return this.heroApi.getHeros();
  }
  async getHero(id: string): Promise<ApiResponse> {
    if (!id)
      return {
        code: 400,
        type: 'error',
        payload: null,
        message: 'Id cannot be empty'
      };
    return this.heroApi.getHero(id);
  }
  async findByStatus(status: string): Promise<ApiResponse> {
    if (!status)
      return {
        code: 400,
        type: 'error',
        payload: null,
        message: 'Status cannot be empty'
      };
    return this.heroApi.findByStatus(status);
  }
  async addHero(hero: Hero): Promise<ApiResponse> {
    if (!this.verifyHero(hero)) {
      return {
        code: 400,
        type: 'error',
        payload: null,
        message: 'Fields cannot be empty'
      };
    }
    return this.heroApi.addHero(hero);
  }
  async updateHero(id: string, hero: Hero): Promise<ApiResponse> {
    if (!this.verifyHero(hero)) {
      return {
        code: 400,
        type: 'error',
        payload: null,
        message: 'Fields cannot be empty'
      };
    }
    return this.heroApi.updateHero(id, hero);
  }
  async deleteHero(id: string): Promise<ApiResponse> {
    if (!id) {
      return {
        code: 400,
        type: 'error',
        payload: null,
        message: 'Id cannot be empty'
      };
    }
    return this.heroApi.deleteHero(id);
  }

  private verifyHero(hero: Hero): boolean {
    if (!hero.name) return false;
    if (!hero.birth) return false;
    if (!hero.death) return false;
    if (!hero.status) return false;
    if (!hero.type) return false;

    return true;
  }
}

export default HeroProxy;
