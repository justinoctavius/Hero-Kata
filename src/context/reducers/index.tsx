import { Context } from '../../constants';
import { Action, State } from '../../types';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Context.HERO_REQUEST:
      return { loading: true, payload: null, error: '' };
    case Context.HERO_SUCCESS:
      return { loading: false, payload: action.payload, error: '' };
    case Context.HERO_FAIL:
      return { loading: false, payload: null, error: action.error };
    default:
      return { ...state };
  }
};

export default reducer;
