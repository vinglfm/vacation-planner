import {combineReducers} from 'redux';
import countryReducer from './countryReducer';
import tripReducer from './tripReducer';

const rootReducer = combineReducers({countryReducer, tripReducer});

export default rootReducer;
