import {SELECT_PHONES, DROPDOWN_PHONES, DROPDOWN_SORT} from '../constants';

const initialState = {
  dropdown: DROPDOWN_PHONES,
  sort: DROPDOWN_SORT
};

const dropdown = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PHONES:
      return {
        ...state,
        dropdown: state.dropdown.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              selected: !item.selected
            };
          }
          return {
            ...item,
            selected: false
          };
        })
      };
    default:
      return state;
  }
};

const selectPhones = value => ({
  type: SELECT_PHONES,
  payload: value
});

const getListPhones = state => state.dropdown;
const selectListPhones = state => getListPhones(state).dropdown;

export default dropdown;
export {
  selectPhones,

  selectListPhones
};
