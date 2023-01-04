import { productReducer } from '../reducer/productReducer';
import { combineReducers } from 'redux';
/**
 * This is the file where all the reducers will combine through the COMBINEREDUCERS. 
 * REDUCERS can be multiple
 */
const reducers = combineReducers( {
    allProducts: productReducer,
} );
export default reducers;