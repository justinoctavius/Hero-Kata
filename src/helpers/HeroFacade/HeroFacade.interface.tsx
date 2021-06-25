import { QueryResponse } from '../../types';

interface IHeroFacade {
  getHeros(): Promise<QueryResponse>;
  getHero(id: number): Promise<QueryResponse>;
  filterHero(name: string): Promise<QueryResponse>;
}

export default IHeroFacade;
