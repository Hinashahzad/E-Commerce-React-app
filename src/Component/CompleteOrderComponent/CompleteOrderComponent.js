import React from 'react';
import { useSelector } from 'react-redux';
import {  Divider, Segment } from 'semantic-ui-react'
export const CompleteOrderComponent = () =>
{
    const shippingAddress = useSelector( ( state ) => state.shippingDetails );
    console.log( shippingAddress );
    console.log(shippingAddress.email);
    return ( <>
        {(shippingAddress)?( <Segment>
            
            <h5>Contact  { shippingAddress.email } </h5>
            <Divider />
            Ship to { shippingAddress.streetHosueNo + ","
                + shippingAddress.postalCode + "   "
                + shippingAddress.city
                + "   " + shippingAddress.country}
        </Segment>):(<div> No Shippment details</div>)}
       
    </> );
};
