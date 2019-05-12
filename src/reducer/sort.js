import {DROPDOWN_SORT, SET_SORT} from '../constants';

const sort = (state = DROPDOWN_SORT.INCREASE, action) => {
  switch (action.type) {
    case SET_SORT: {
      return action.payload.value;
    }
    default: {
      return state;
    }
  }
};

const setSort = value => ({
  type: SET_SORT,
  payload: {value}
});

export default sort;
export {
  setSort
};
