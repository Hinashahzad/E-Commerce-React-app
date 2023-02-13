import { actionTypes } from '../constants/actionType';

export const shippingDetailsReducer = ( state = {}, { type, payload } ) =>
{
    switch ( type )
    {
        case actionTypes.SHIPPING_DETAILS:
            return { ...state, ...payload };
        default:
            return state;
    }
};
