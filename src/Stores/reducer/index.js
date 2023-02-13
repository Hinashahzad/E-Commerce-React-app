import { prodctReducer, selectedProductReducer, addToBagReducer, updateSelectedProductReducer } from '../reducer/productReducer';
import { ModalReducer } from './ModalReducer';
import { UserReducer, activeUserReducer } from './UserReducer';
import { CounterReducer } from './CounterReducer';
import { combineReducers } from 'redux';
import { subTotalReducer } from './subTotalReducer';
import { discountReducer } from './discountReducer';
import { ShowLoginReducer } from './ShowLoginReducer';
import { shippingDetailsReducer } from './ShippingDetailsReducer';

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
    subTotal: subTotalReducer, 
    discount: discountReducer, 
    showLogin: ShowLoginReducer,
    shippingDetails:shippingDetailsReducer,
} );