import { actionTypes } from "../constants/actionType"
export const showLogin = ( login ) =>
{
    return {
        type: actionTypes.SHOW_LOGIN,
        payload:login
    }
};
