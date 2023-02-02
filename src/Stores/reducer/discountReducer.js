import { actionTypes } from "../constants/actionType";

var initialState = "";
export const discountReducer = (state=initialState, {type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.DISCOUNT:
            return payload
        default:
            return state
    }
}