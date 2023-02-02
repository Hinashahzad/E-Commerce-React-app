/**
 * COUNTER REDUCER: 
 */


import { actionTypes } from "../constants/actionType";

let counter = 1;

export const CounterReducer = ( state = counter, { type, payload } ) =>
{
    switch ( type )
    {
        case actionTypes.INCREMENT:
            return state + 1
        case actionTypes.DECREMENT:
            return state - 1
        case actionTypes.RESET:
            return ( state = 1 );
        default:
            return state
    }
}