/**
 * This files describe HOW to perform the actions
 * IMPORTANT:
 *  It takes two arguments : Initial state and actions(JAVASCRRIPT object {type, payload})
 */
import { actionTypes } from '../constants/actionType';

const initialState = {
    products: []
}
export const prodctReducer = (state=initialState,{type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.SET_PRODUCT:
            return { ...state, products:payload };
        default:
            return state;
    }
};

export const selectedProductReducer = ( state = {}, {type, payload} ) =>
{
    switch ( type )
    {
        case actionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}