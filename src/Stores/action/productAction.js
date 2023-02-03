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
};

/**
 * ACTION 3
 */

export const removeSelectedProduct = () =>
{
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT
    }
};

/*ACTION 4:
All the Selected Product will be dispatch to the addToCart after CLicking the "ADD TO BAG" button;
*/

export const addToCart = (products) =>
{
    return {
        type: actionTypes.ADD_TO_BAG,
        payload:products
    }
};

/**ACTION 5:
 * UPDATE THE SELECTED PRODUCT
 */
export const updateSelectedProduct = ( data) =>
{
    return {
        type: actionTypes.UPDATE_SELECTED_PRODUCT,
        payload:data
    }
}