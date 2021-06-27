import { Hero, ApiResponse, Filter } from '../../types';

interface IHeroFacade {
  getHeros(): Promise<ApiResponse>;
  getHero(id: string): Promise<ApiResponse>;
  filterHero(filter: Filter): Promise<ApiResponse>;
  addHero(hero: Hero): Promise<ApiResponse>;
  updateHero(id: string, hero: Hero): Promise<ApiResponse>;
  deleteHero(id: string): Promise<ApiResponse>;
}

export default IHeroFacade;
