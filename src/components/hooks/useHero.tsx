import { useEffect, useState } from 'react';
import { QueryResponse } from '../../types';
import HeroFacade from './../../helpers/HeroFacade/index';

const useHero = () => {
  const heroFacade = new HeroFacade();
  const [herosResponse, setHerosResponse] = useState<QueryResponse>();
  const [heroResponse, setHeroResponse] = useState<QueryResponse>();

  const getHeros = async () => {
    const heros = await heroFacade.getHeros();
    setHerosResponse(heros);
  };

  const filterHero = async (name: string) => {
    const heros = await heroFacade.filterHero(name);
    setHerosResponse(heros);
  };

  const getHero = async (id: number) => {
    const hero = await heroFacade.getHero(id);
    setHeroResponse(hero);
  };

  return { herosResponse, heroResponse, getHero, filterHero, getHeros };
};

export default useHero;
