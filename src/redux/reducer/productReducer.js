/**
 * This files describe HOW to perform the actions
 * IMPORTANT:
 *  It takes two arguments : Initial state and actions
 */
import { actionTypes } from '../constants/actionType';
export const initialState = {
    products: [ {
        id: "1", 
        productName: "Hina Shahazad", 
        productCatagory:"Human being"
    }]
}
export const prodctReducer = (state=initialState,action) =>
{
    switch ( action.type )
    {
        case actionTypes.SET_PRODUCT:
            return state;
        default:
            return state;
    }
    
}