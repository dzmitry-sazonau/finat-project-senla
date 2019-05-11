import guid from '../utils';

const initialState = {
  phones: []
};

const LOAD_PHONES = 'LOAD_PHONES';
const ADD_PHONE = 'ADD_PHONE';
const DELETE_PHONE = 'DELETE_PHONE';
// const CHANGE_PHONE = 'CHANGE_PHONE';


const phones = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHONES:
      return {
        ...state,
        phones: action.payload.map(item => ({
          ...item,
          id: guid(),
          store: false
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


const getPhones = state => state.phones;
const selectPhones = state => getPhones(state).phones;

export default phones;
export {
  loadPhones,
  addPhone,
  deletePhone,

  selectPhones
};
