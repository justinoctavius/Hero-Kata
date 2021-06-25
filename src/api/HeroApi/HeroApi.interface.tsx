import { QueryResponse } from '../../types';

interface IHeroApi {
  getHeros(): Promise<QueryResponse>;
  getHero(id: number): Promise<QueryResponse>;
  filterHero(name: string): Promise<QueryResponse>;
}

export default IHeroApi;
