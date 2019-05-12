import guid from '../utils';
import {
  LOAD_PHONES, ADD_PHONE, DELETE_PHONE, SEARCH_PHONES, CANCEL_SEARCH
} from '../constants';

const initialState = {
  phones: []
};

const phones = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHONES:
      return {
        ...state,
        phones: action.payload.map(item => ({
          ...item,
          id: guid(),
          isStore: false,
          isSearch: false
        }))
      };
    case ADD_PHONE:
      return {
        ...state,
        phones: [...state.phones, action.payload]
      };
    case DELETE_PHONE:
      return {
        ...state,
        phones: state.phones.filter(item => item.id !== action.payload)
      };
    case SEARCH_PHONES:
      return {
        ...state,
        phones: state.phones.map((item) => {
          if (item.DeviceName.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1) {
            return {
              ...item,
              isSearch: true
            };
          }
          return item;
        })
      };
    case CANCEL_SEARCH:
      return {
        ...state,
        phones: state.phones.map(item => ({
          ...item,
          isSearch: false
        }))
      };
    // case CHANGE_PHONE:
    //   return {
    //     ...state,
    //     phones: state.phones.filter(item => item.id !== action.payload)
    //   };
    default:
      return state;
  }
};

const loadPhones = value => ({
  type: LOAD_PHONES,
  payload: value
});

const addPhone = value => ({
  type: ADD_PHONE,
  payload: value
});

const deletePhone = value => ({
  type: DELETE_PHONE,
  payload: value
});

const seacrhPhones = value => ({
  type: SEARCH_PHONES,
  payload: value
});

const cancelSeacrh = () => ({
  type: CANCEL_SEARCH,
});

const getPhones = state => state.phones;
const selectPhones = state => getPhones(state).phones;

export default phones;
export {
  loadPhones,
  addPhone,
  deletePhone,
  seacrhPhones,
  cancelSeacrh,

  selectPhones
};
