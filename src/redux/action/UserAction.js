//What to do
import { actionTypes } from '../constants/actionType';

export const UserAction = ( user ) =>
{
    return {
        type:actionTypes.SET_USER, 
        payload:user
    }
};