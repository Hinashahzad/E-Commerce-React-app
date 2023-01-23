import { prodctReducer, selectedProductReducer, addToBagReducer } from '../reducer/productReducer';
import { UserReducer,activeUserReducer } from '../reducer/UserReducer';
import { combineReducers } from 'redux';
/**
 * This is the file where all the reducers will combine through the COMBINEREDUCERS. 
 * REDUCERS can be multiple
 */
export const reducers = combineReducers( {
    allProducts: prodctReducer,
    product: selectedProductReducer,
    allUser: UserReducer,
    activeUser: activeUserReducer,
    card:addToBagReducer,
} );