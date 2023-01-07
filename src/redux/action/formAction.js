import {actionTypes} from '../constants/actionType'

export const registerUsers = ( user ) => {
    return {
        type: actionTypes.REGISTER_USER,
        payload:user

    }
}