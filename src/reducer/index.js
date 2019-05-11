import {combineReducers} from 'redux';
import phones from './phones';
import dropdown from './dropdown';

const rootReducer = combineReducers({
  phones,
  dropdown
});

export default rootReducer;
