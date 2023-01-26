import { actionTypes } from "../constants/actionType"

/**
 * COUNTER ACTION: UPDATE THE QUANTITIES OF EACH PRODUCT
 */

export const increment = ( counter ) =>
{
    return {
        type: actionTypes.INCREMENT,
        payload:counter
    }
};
export const decrement = ( counter ) =>
{
    return {
        type: actionTypes.DECREMENT,
        payload:counter
    }
};
export const reset = ( counter ) =>
{
    return {
        type: actionTypes.RESET,
        payload:counter
    }
};
