
/**
 * WHAT TO DO IN SUB_TOTAL ACTION
 */
import { actionTypes } from "../constants/actionType"

export const subTotal = ( subTotal ) =>
{
    return {
        type: actionTypes.SUB_TOTAL,
        payload:subTotal
    }
}