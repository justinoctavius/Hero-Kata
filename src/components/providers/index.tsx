import React, { createContext, useMemo, useReducer } from 'react';
import reducer from '../../context/reducers';
import HeroActions from './../../context/actions/HeroActions';
import HeroFacade from './../../helpers/HeroFacade/HeroFacade';
import { Hero, Filter } from './../../types';

const initialized = { loading: false, payload: null, error: '' };
export const HeroContext = createContext({});

type propsType = {
  children: JSX.Element | string;
};

const ContextProvider = ({ children }: propsType) => {
  const [heroState, heroDispatch] = useReducer(reducer, initialized);
  const [herosState, herosDispatch] = useReducer(reducer, initialized);
  const [writeState, writeDispatch] = useReducer(reducer, initialized);

  const actions = new HeroActions();

  const heroActions = useMemo(
    () => ({
      getHero: (id: string) => actions.getHero(id)(heroDispatch),
      getHeros: () => actions.getHeros()(herosDispatch),
      filterHero: (filter: Filter) => actions.filterHero(filter)(herosDispatch),
      addHero: (hero: Hero) => actions.addHero(hero)(writeDispatch),
      updateHero: (id: string, hero: Hero) =>
        actions.updateHero(id, hero)(writeDispatch),
      deleteHero: (id: string) => actions.deleteHero(id)(writeDispatch)
    }),
    []
  );

  const value = {
    heroState,
    herosState,
    writeState,
    heroActions
  };

  return <HeroContext.Provider value={value}>{children}</HeroContext.Provider>;
};

export default ContextProvider;
