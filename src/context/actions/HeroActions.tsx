import { Dispatch } from 'react';
import { Context } from '../../constants';
import { Action, ApiResponse, Filter, Hero } from '../../types';
import IHeroFacade from './../../helpers/HeroFacade/IHeroFacade';
import HeroFacade from './../../helpers/HeroFacade/HeroFacade';

class HeroActions {
  private heroFacade: IHeroFacade;

  constructor() {
    this.heroFacade = HeroFacade.getInstance();
  }

  getHero =
    (id: string) =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      const query = () => this.heroFacade.getHero(id);
      this.dispatchAction(query, dispatch);
    };
  filterHero =
    (filter: Filter) =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      const query = () => this.heroFacade.filterHero(filter);
      this.dispatchAction(query, dispatch);
    };
  addHero =
    (hero: Hero) =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      const query = () => this.heroFacade.addHero(hero);
      this.dispatchAction(query, dispatch);
    };
  updateHero =
    (id: string, hero: Hero) =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      const query = () => this.heroFacade.updateHero(id, hero);
      this.dispatchAction(query, dispatch);
    };
  deleteHero =
    (id: string) =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      const query = () => this.heroFacade.deleteHero(id);
      this.dispatchAction(query, dispatch);
    };
  getHeros =
    () =>
    async (dispatch: Dispatch<Action>): Promise<void> => {
      const query = () => this.heroFacade.getHeros();
      this.dispatchAction(query, dispatch);
    };

  private async dispatchAction(
    query: () => Promise<ApiResponse>,
    dispatch: Dispatch<Action>
  ): Promise<void> {
    dispatch({ type: Context.HERO_REQUEST, payload: null, error: '' });
    try {
      const response = await query();
      const { code, payload, message } = response;
      if (code === 200) {
        dispatch({ type: Context.HERO_SUCCESS, payload, error: '' });
      } else {
        dispatch({
          type: Context.HERO_FAIL,
          payload: null,
          error: message
        });
      }
    } catch (error) {
      dispatch({
        type: Context.HERO_FAIL,
        payload: null,
        error: 'Ups an error has ocurred'
      });
    }
  }
}

export default HeroActions;
