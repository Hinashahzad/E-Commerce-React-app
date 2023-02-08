import { actionTypes } from "../constants/actionType";

const initialState = true

export const ShowLoginReducer = (state=initialState, {type, payload}) =>
{
    switch (type) {
    case actionTypes.SHOW_LOGIN:
      return payload
        default:
            return state;
  }
    
}