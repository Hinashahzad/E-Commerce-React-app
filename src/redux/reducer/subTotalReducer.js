import { actionTypes } from "../constants/actionType";

const initialState = 0;

export const subTotalReducer = (state=initialState, {type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.SUB_TOTAL:
            return { state: payload }
        default:
            return { state }
    }
}