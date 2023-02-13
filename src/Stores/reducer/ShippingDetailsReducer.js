import { actionTypes } from '../constants/actionType';
const initialState = {shippingdetail:[]}
export const shippingDetailsReducer = ( state = initialState, { type, payload } ) =>
{
    switch ( type )
    {
        case actionTypes.SHIPPING_DETAILS:
            return { ...state, ...payload };
        default:
            return state;
    }
};
