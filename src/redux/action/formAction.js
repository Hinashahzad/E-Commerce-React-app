

/*ACTION: What to do 
Action name: registerUsers
Action always return the Javascript object containing type and payload
REGISTER_USER is action type and payload contain the data*/

import { actionTypes } from '../constants/actionType'

/**
 * ACTION 1
 * @param {user} user 
 * @returns RegisterUsers
 */
export const registerUsers = ( user ) => {
    return {
        type: actionTypes.REGISTER_USER,
        payload:user

    }
}