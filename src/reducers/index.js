import {combineReducers} from 'redux';
import countryReducer from './countryReducer';
import tripReducer from './tripReducer';
import sidebarReducer from './sidebarReducer';

const rootReducer = combineReducers({countryReducer, tripReducer, sidebarReducer});

export default rootReducer;
