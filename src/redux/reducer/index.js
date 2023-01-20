import { prodctReducer, selectedProductReducer } from '../reducer/productReducer';
import { UserReducer } from '../reducer/UserReducer';
import { combineReducers } from 'redux';
/**
 * This is the file where all the reducers will combine through the COMBINEREDUCERS. 
 * REDUCERS can be multiple
 */
export const reducers = combineReducers( {
    allProducts: prodctReducer,
    product: selectedProductReducer,
    allUser: UserReducer,
} );