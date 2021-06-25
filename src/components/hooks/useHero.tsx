import HeroFacade from './../../helpers/HeroFacade/index';

const useHero = () => {
  const heroFacade = new HeroFacade();
  const getHeros = async () => {
    return await heroFacade.getHeros();
  };

  const filterHero = async (name: string) => {
    return await heroFacade.filterHero(name);
  };

  const getHero = async (id: number) => {
    return await heroFacade.getHero(id);
  };

  return { getHero, filterHero, getHeros };
};

export default useHero;
