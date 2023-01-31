import { actionTypes } from "../constants/actionType";

/**
 * 
 * @param {Action 1} dimmer 
 * @returns state {open:true, dimmer:"blurring"}
 */
export const OpenModalAction = ( dimmer ) =>
{
    return {
        type:actionTypes.OPEN_MODAL, 
        dimmer:dimmer
    }
};
/**
 * 
 * @param {Action 2} dimmer 
 * @returns initial state {open:false, dimmer:undefined }
 */
export const CloseModalAction = (dimmer) =>
{
    return {
        type: actionTypes.CLOSE_MODAL,
        dimmer:dimmer
    }
};