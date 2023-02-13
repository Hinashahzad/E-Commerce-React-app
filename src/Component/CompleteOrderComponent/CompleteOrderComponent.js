import React from 'react';
import { useSelector } from 'react-redux';
export const CompleteOrderComponent = () =>
{
    const shippingAddress = useSelector( ( state ) => state.shippingDetails );
    console.log( shippingAddress );
    console.log(shippingAddress.email);
    return ( <>
        
    </> );
};
