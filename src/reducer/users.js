import {
  LOG_ADMIN, LOG_USER, LOAD_USERS, LOG_PERSON, LOG_OUT, ADD_USER
} from '../constants';

const initialState = {
  isAdmin: true,
  isLogin: false,
  allUsers: [
    {
      name: 'Admin',
      surname: 'admin',
      password: 1111,
      email: 'mister.mitya99@gmail.com'
    },
    {
      name: 'Dima',
      surname: 'Sazonov',
      password: 2222,
      email: 'nhz.dima.sazonov@gmail.com'
    }
  ],
  user: ''
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOG_ADMIN:
      return {
        ...state,
        isAdmin: true,
        isLogin: false,
      };
    case ADD_USER:
      return {
        ...state,
        allUsers: [action.payload, ...state.allUsers]
      };
    case LOG_USER:
      return {
        ...state,
        isAdmin: false,
        isLogin: true,
      };
    case LOAD_USERS:
      return {
        ...state,
        allUsers: action.payload
      };
    case LOG_PERSON:
      return {
        ...state,
        user: action.payload
      };
    case LOG_OUT:
      return {
        ...state,
        isAdmin: false,
        isLogin: false,
        user: ''
      };
    default: {
      return state;
    }
  }
};

const loadUsers = value => ({
  type: LOAD_USERS,
  payload: value
});

const addUser = value => ({
  type: ADD_USER,
  payload: value
});

const setAdmin = () => ({
  type: LOG_ADMIN,
});

const setUser = () => ({
  type: LOG_USER
});

const logOut = () => ({
  type: LOG_OUT
});

const logPerson = value => ({
  type: LOG_PERSON,
  payload: value
});

const getState = state => state.users;

const selectUser = state => getState(state).isLogin;

const selectAdmin = state => getState(state).isAdmin;

const selectUsers = state => getState(state).allUsers;

const selectName = state => getState(state).user;

export default users;
export {
  setAdmin,
  setUser,
  loadUsers,
  logPerson,
  logOut,
  addUser,

  selectAdmin,
  selectUser,
  selectUsers,
  selectName
};
