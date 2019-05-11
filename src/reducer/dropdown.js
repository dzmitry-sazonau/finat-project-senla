import guid from '../utils';

const initialState = {
  dropdown: [
    {
      id: guid(),
      title: 'Apple',
      selected: false,
    },
    {
      id: guid(),
      title: 'Samsung',
      selected: false,
    },
    {
      id: guid(),
      title: 'Xiaomi',
      selected: false,
    },
    {
      id: guid(),
      title: 'Meizu',
      selected: false,

    },
    {
      id: guid(),
      title: 'Huawei',
      selected: false,
    }
  ]
};

const SELECT_PHONES = 'SELECT_PHONES';

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
