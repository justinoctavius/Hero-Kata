import { ApiResponse } from '../../types';
import Filter from '../../types/Filter';

interface IFilterHandler {
  setNext(handler: IFilterHandler): IFilterHandler;
  handle(filter: Filter): Promise<ApiResponse>;
}

export default IFilterHandler;
