import { actionTypes } from '../constants/actionType';
/**-----------REDUCER: HOW TO DO--------------- 
 * User Reducer takes action (distructure the type and payload) and initial state
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