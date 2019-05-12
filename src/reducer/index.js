import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import phones from './phones';
import dropdown from './dropdown';
import filter from './filter';
import sort from './sort';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  phones,
  dropdown,
  filter,
  sort
});

export default rootReducer;
