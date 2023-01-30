import { actionTypes } from "../constants/actionType";

var initialState = 0;

export const subTotalReducer = (state=initialState, {type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.SUB_TOTAL:
            return payload
        default:
            return state
    }
}