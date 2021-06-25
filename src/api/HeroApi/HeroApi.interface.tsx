import { QueryResponse } from '../../types';

interface IHeroApi {
  getHeros(): Promise<QueryResponse>;
  getHero(id: number): Promise<QueryResponse>;
}

export default IHeroApi;
