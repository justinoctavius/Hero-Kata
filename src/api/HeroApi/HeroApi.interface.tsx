import { QueryResponse } from '../../types';

interface IHeroApi {
  getHeros(): Promise<QueryResponse>;
  getHero(id: number): Promise<QueryResponse>;
  getByName(name: string): Promise<QueryResponse>;
}

export default IHeroApi;
