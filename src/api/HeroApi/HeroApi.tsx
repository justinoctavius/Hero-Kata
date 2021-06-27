import { HerosModel } from '../../models';
import { Hero, ApiResponse } from '../../types';
import IHeroApi from './IHeroApi';

class HeroApi implements IHeroApi {
  async getHeros(): Promise<ApiResponse> {
    try {
      return Promise.resolve({
        code: 200,
        message: 'success',
        type: 'get',
        payload: [...HerosModel]
      });
    } catch (error) {
      return Promise.resolve({
        code: 500,
        message: 'error',
        type: 'error',
        payload: null
      });
    }
  }
  async getHero(id: string): Promise<ApiResponse> {
    try {
      return Promise.resolve({
        code: 200,
        message: 'success',
        type: 'get',
        payload: HerosModel.find((hero) => hero.id === id)
      });
    } catch (error) {
      return Promise.resolve({
        code: 500,
        message: 'error',
        type: 'error',
        payload: null
      });
    }
  }
  async findByStatus(status: string): Promise<ApiResponse> {
    try {
      return Promise.resolve({
        code: 200,
        message: 'success',
        type: 'get',
        payload: HerosModel.filter((hero) => hero.status === status)
      });
    } catch (error) {
      return Promise.resolve({
        code: 500,
        message: 'error',
        type: 'error',
        payload: null
      });
    }
  }
  async addHero(hero: Hero): Promise<ApiResponse> {
    try {
      HerosModel.push(hero);
      return Promise.resolve({
        code: 200,
        message: 'success',
        type: 'post',
        payload: hero
      });
    } catch (error) {
      return Promise.resolve({
        code: 500,
        message: 'error',
        type: 'error',
        payload: null
      });
    }
  }
  async updateHero(id: string, hero: Hero): Promise<ApiResponse> {
    try {
      return Promise.resolve({
        code: 200,
        message: 'success',
        type: 'put',
        payload: hero
      });
    } catch (error) {
      return Promise.resolve({
        code: 500,
        message: 'error',
        type: 'error',
        payload: null
      });
    }
  }
  async deleteHero(id: string): Promise<ApiResponse> {
    try {
      return Promise.resolve({
        code: 200,
        message: 'success',
        type: 'delete',
        payload: HerosModel.find((hero) => hero.id === id)
      });
    } catch (error) {
      return Promise.resolve({
        code: 500,
        message: 'error',
        type: 'error',
        payload: null
      });
    }
  }
}

export default HeroApi;
