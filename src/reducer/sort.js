import {SET_SORT, DROPDOWN_SORT_ARRAY} from '../constants';

const initialState = {
  value: '',
  sort: DROPDOWN_SORT_ARRAY
};

const sort = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT: {
      return {
        sort: state.sort.map((item) => {
          if (item.title === action.payload.value) {
            return {
              ...item,
              selected: true
            };
          } return {
            ...item,
            selected: false
          };
        }),
        value: action.payload.value
      };
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

const getListSort = state => state.sort;
const selectListSort = state => getListSort(state).sort;

export default sort;
export {
  setSort,

  selectListSort
};
