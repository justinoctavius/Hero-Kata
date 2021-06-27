import { ApiResponse } from '../../types';
import Filter from '../../types/Filter';
import IHeroApi from '../../api/HeroApi/IHeroApi';
import IFilterHandler from './IFilterHandler';

abstract class FilterHandler implements IFilterHandler {
  private nextFilterHandler: IFilterHandler | undefined;
  protected heroApi: IHeroApi;

  constructor(heroApi: IHeroApi) {
    this.heroApi = heroApi;
  }

  public setNext(Handler: IFilterHandler) {
    this.nextFilterHandler = Handler;
    return Handler;
  }

  public async handle(filter: Filter): Promise<ApiResponse> {
    if (this.nextFilterHandler) {
      return await this.nextFilterHandler.handle(filter);
    }
    return { code: 400, message: 'error!', type: 'error', payload: null };
  }
}

export default FilterHandler;
