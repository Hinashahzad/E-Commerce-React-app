import { actionTypes } from '../constants/actionType';
/**
 * User Reducer takes action and initial state
 */
const initialState = {
    user: [ ]
};

export const userReducer = (state=initialState, {type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.REGISTER_USER:
            return { ...state, user:payload };
        default:
            return state
    }
}