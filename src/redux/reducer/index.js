import { prodctReducer, selectedProductReducer, addToBagReducer } from '../reducer/productReducer';
import { ModalReducer } from './ModalReducer';
import { UserReducer, activeUserReducer } from '../reducer/UserReducer';
import { CounterReducer } from './CounterReducer';
import { combineReducers } from 'redux';
import { subTotalReducer } from './subTotalReducer';
/**
 * This is the file where all the reducers will combine through the COMBINEREDUCERS. 
 * REDUCERS can be multiple
 */
export const reducers = combineReducers( {
    allProducts: prodctReducer,
    product: selectedProductReducer,
    allUser: UserReducer,
    activeUser: activeUserReducer,
    card: addToBagReducer,
    modal: ModalReducer,
    count: CounterReducer,
    subTotal:subTotalReducer
} );