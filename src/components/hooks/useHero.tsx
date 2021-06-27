import { Filter } from '../../types';
import HeroFacade from '../../helpers/HeroFacade/HeroFacade';
import { useContext } from 'react';
import { HeroContext } from '../providers';
import Hero from './../../types/Hero';

const useHero = () => {
  const { heroActions, heroState, herosState, writeState }: any =
    useContext(HeroContext);

  const getHeros = async () => {
    console.log(heroActions);
    await heroActions.getHeros();
  };

  const filterHero = async (filter: Filter) => {
    await heroActions.filterHero(filter);
  };

  const getHero = async (id: string) => {
    await heroActions.getHero(id);
  };

  const addHero = async (hero: Hero) => {
    await heroActions.addHero(hero);
  };

  const updateHero = async (id: string, hero: Hero) => {
    await heroActions.updateHero(id, hero);
  };

  const deleteHero = async (id: string) => {
    await heroActions.deleteHero(id);
  };

  return {
    heroState,
    herosState,
    writeState,
    getHero,
    filterHero,
    getHeros,
    addHero,
    updateHero,
    deleteHero
  };
};

export default useHero;
