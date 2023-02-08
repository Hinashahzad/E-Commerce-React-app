import { actionTypes } from "../constants/actionType";

const initialState = {
    countryName:"Norway",
};
export const countryNameReducer = (state=initialState, {type, payload}) =>
{
    switch ( type )
    {
        case actionTypes.COUNTRY_NAME:
            return payload
        default:
            return state
    }
}