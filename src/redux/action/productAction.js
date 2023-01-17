import {actionTypes} from '../constants/actionType'

/*
ACTION -----------------------WHAT TO DO?
FUNCTION 1----------- DEFINE THE SET_PRODUCT
FUNCTION 2------------DEFINE THE SELECT PRODUCT
IMPORTANT: ACTION ALWAYS RETURN PURE JAVASCRIPT OBJECT IN FORM OF KEY: VALUE PAIR
1. TYPE
2. PAYLOAD*/

/**
 * 
 * ACTION 1
 */
export const setProduct = ( products ) =>
{
    return {
        type: actionTypes.SET_PRODUCT,
        payload:products
    }
};
/**
 * 
 * ACTION 2
 */
export const selectProduct = ( product ) =>
{
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload:product
    }
}