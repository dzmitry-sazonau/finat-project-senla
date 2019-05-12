import guid from './utils';

export const LOAD_PHONES = 'LOAD_PHONES';
export const ADD_PHONE = 'ADD_PHONE';
export const DELETE_PHONE = 'DELETE_PHONE';
export const CHANGE_PHONE = 'CHANGE_PHONE';
export const SELECT_PHONES = 'SELECT_PHONES';
export const SEARCH_PHONES = 'SEARCH_PHONES';
export const CANCEL_SEARCH = 'CANCEL_SEARCH';
export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';

export const FILTERS = {
  ALL: 'all',
  SEARCH: 'search'
};

export const DROPDOWN_SORT = {
  INCREASE: 'increase',
  DECREASE: 'decrease'
};

export const DROPDOWN_PHONES = [
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
];
