import { Hero, ApiResponse, Filter } from '../../types';
import IHeroFacade from './IHeroFacade';
import IHeroApi from '../../api/HeroApi/IHeroApi';
import HeroProxy from './../HeroProxy/';
import HeroApi from './../../api/HeroApi/HeroApi';
import { StatusFilterHandler } from '..';
import { IFilterHandler } from './../FilterHandler';

class HeroFacade implements IHeroFacade {
  private heroApi: IHeroApi;
  private static instance: IHeroFacade | null = null;
  private statusFilterHandler: IFilterHandler;
  private constructor() {
    this.heroApi = new HeroProxy(new HeroApi());
    this.statusFilterHandler = new StatusFilterHandler(this.heroApi);
  }
  public static getInstance() {
    if (!this.instance) {
      return (this.instance = new HeroFacade());
    }
    return this.instance;
  }
  async addHero(hero: Hero): Promise<ApiResponse> {
    return this.heroApi.addHero(hero);
  }
  async updateHero(id: string, hero: Hero): Promise<ApiResponse> {
    return this.heroApi.updateHero(id, hero);
  }
  async deleteHero(id: string): Promise<ApiResponse> {
    return this.heroApi.deleteHero(id);
  }

  async filterHero(filter: Filter): Promise<ApiResponse> {
    return this.statusFilterHandler.handle(filter);
  }
  async getHeros(): Promise<ApiResponse> {
    return this.heroApi.getHeros();
  }
  async getHero(id: string): Promise<ApiResponse> {
    return this.heroApi.getHero(id);
  }
}

export default HeroFacade;
