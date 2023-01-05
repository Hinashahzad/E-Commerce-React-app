import { legacy_createStore as createStore } from 'redux';
import { reducers } from '../redux/reducer/index';
/**
 * HERE we can create a store and add the reducers to the stores
 * 1 argument is reducers 
 * 2 argument is empty state
 * 3 argument is 
 */

export const store = createStore( reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

