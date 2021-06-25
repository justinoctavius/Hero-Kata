import { QueryResponse } from '../../types';
import IHeroFacade from './HeroFacade.interface';
import IHeroApi from './../../api/HeroApi/HeroApi.interface';
import HeroApi from './../../api/HeroApi/index';

class HeroFacade implements IHeroFacade {
  private heroApi: IHeroApi;

  constructor() {
    this.heroApi = new HeroApi();
  }

  filterHero(name: string): Promise<QueryResponse> {
    return this.heroApi.filterHero(name);
  }
  getHeros(): Promise<QueryResponse> {
    return this.heroApi.getHeros();
  }
  getHero(id: number): Promise<QueryResponse> {
    return this.heroApi.getHero(id);
  }
}

export default HeroFacade;
