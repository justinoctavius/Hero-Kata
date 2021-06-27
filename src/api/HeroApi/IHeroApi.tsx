import { Hero, ApiResponse } from '../../types';

interface IHeroApi {
  getHeros(): Promise<ApiResponse>;
  getHero(id: string): Promise<ApiResponse>;
  findByStatus(status: string): Promise<ApiResponse>;
  addHero(hero: Hero): Promise<ApiResponse>;
  updateHero(id: string, hero: Hero): Promise<ApiResponse>;
  deleteHero(id: string): Promise<ApiResponse>;
}

export default IHeroApi;
