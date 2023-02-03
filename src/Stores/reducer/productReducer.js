/**
 * This files describe HOW to perform the actions
 * IMPORTANT:
 *  It takes two arguments : Initial state and actions(JAVASCRRIPT object {type, payload})
 */
import { actionTypes } from '../constants/actionType';
import update from 'immutability-helper';
import { useDispatch, useSelector } from 'react-redux'
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
};
export const addToBagReducer = (state=initialState, {type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.ADD_TO_BAG:
            return { ...state, products:payload };
        default:
            return state;
    }
};
export const updateSelectedProductReducer = ( state=initialState,{ type, payload }) =>
{
    switch(type) {
		case actionTypes.UPDATE_SELECTED_PRODUCT:
			return {...state, ...payload} 
			
		default:
			return state;
	}
};