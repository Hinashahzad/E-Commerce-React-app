//What to do
import { actionTypes } from '../constants/actionType';

export const UserAction = ( user ) =>
{
    return {
        type:actionTypes.SET_USER, 
        payload:user
    }
};
/**
 * 
 * @param {activeUser} activeUser 
 * @returns activeUser 
 */
export const ActiveUser = ( activeUser ) =>
{
    return {
        type: actionTypes.ACTIVE_USER,
        payload:activeUser
    }
}