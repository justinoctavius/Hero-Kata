import Filter from '../../types/Filter';
import FilterHandler from '../FilterHandler/FilterHandler';

class FilterStatusHandler extends FilterHandler {
  public async handle(filter: Filter) {
    if (filter.status) {
      return this.heroApi.findByStatus(filter.status);
    }
    return super.handle(filter);
  }
}

export default FilterStatusHandler;
