/**
 * How to perform Action
 */
import { actionTypes } from "../constants/actionType";

const initialstate = {
    user: [
    ]
};
export const UserReducer = (state=initialstate, {type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.SET_USER:
            return { ...state, user:payload}
        default:
            return state
    }
};


