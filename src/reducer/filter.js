import {SET_FILTER, FILTERS} from '../constants';

const filter = (state = FILTERS.ALL, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.value;
    }
    default: {
      return state;
    }
  }
};

const setFilter = value => ({
  type: SET_FILTER,
  payload: {value}
});

export default filter;
export {
  setFilter
};
