import { actionTypes } from '../constants/actionType';

export const shippingDetails = (shippingDetails) =>
{
    return {
        type: actionTypes.SHIPPING_DETAILS,
        payload: shippingDetails
    }
}