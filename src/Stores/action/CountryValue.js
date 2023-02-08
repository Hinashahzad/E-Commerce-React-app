
import { actionTypes } from "../constants/actionType"
export const countryValue = ( country ) =>
{
    return {
        type: actionTypes.COUNTRY_NAME,
        payload:country
    }
};
