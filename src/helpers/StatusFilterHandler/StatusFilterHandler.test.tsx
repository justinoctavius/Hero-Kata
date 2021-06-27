import StatusFilterHandler from '.';
import { ApiResponse } from '../../types';
import { IFilterHandler } from '../FilterHandler';
import HeroApi from './../../api/HeroApi/HeroApi';

describe('StatusFilterHandler', () => {
  let statusFilterHandler: IFilterHandler;

  beforeAll(() => {
    statusFilterHandler = new StatusFilterHandler(new HeroApi());
  });
  it('Should return a list of matches heros given a status filter', async () => {
    const expected: ApiResponse = {
      code: 200,
      message: 'success',
      type: 'get',
      payload: []
    };
    const result = await statusFilterHandler.handle({ status: 'alive' });
    expect(result.message).toBe(expected.message);
    expect(result.code).toBe(expected.code);
    expect(result.type).toBe(expected.type);
    expect(result.payload).toBeDefined();
  });
});
