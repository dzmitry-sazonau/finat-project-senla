import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import phones from './phones';
import dropdown from './dropdown';
import filter from './filter';
import sort from './sort';
import users from './users';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  phones,
  dropdown,
  filter,
  sort,
  users
});

export default rootReducer;
