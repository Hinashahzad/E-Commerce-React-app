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

export const activeUserReducer = (state={}, {type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.ACTIVE_USER:
            return { ...state, ...payload }
        case actionTypes.REMOVE_ACTIVE_USER:
            return {}
        default:
            return state
    }
}
