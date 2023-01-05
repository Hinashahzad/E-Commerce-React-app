/**
 * This files describe HOW to perform the actions
 * IMPORTANT:
 *  It takes two arguments : Initial state and actions
 */
import { actionTypes } from '../constants/actionType';

const initialState = {
    products: [ {
        id: "1", 
        productName: "Hina Shahazad", 
        productCatagory:"Human being"
    }]
}
export const prodctReducer = (state=initialState,{type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.SET_PRODUCT:
            return state;
        default:
            return state;
    }

}