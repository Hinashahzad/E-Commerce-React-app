import React from 'react';
import { useSelector } from 'react-redux';
import {  Divider, Segment, Grid } from 'semantic-ui-react'
import Billing from '../Billing/JS index';
import  CompleteOrderDetail  from '../../Container/CompleteOrderDetail/JS index';
const CompleteOrder = () =>
{
    const shippingAddress = useSelector( ( state ) => state.user.shippingDetails );
    
    return ( <>
        
        <Grid columns='equal'>
            <Grid.Row>
            <Grid.Column width={10} stretched>
                <Segment compact>
                    <pre> Contact       { shippingAddress.email }  </pre>
                    <Divider />
                    <pre> Ship to       { shippingAddress.streetHosueNo + "," + shippingAddress.postalCode + "   "+ shippingAddress.city + "   " + shippingAddress.country}</pre>
                    <Divider />
                        <Segment >
                            <h4>Billing Address</h4>
                            <h5>Select the address that matches your card or payment method.</h5>
                            <Divider />
                            <Billing />
                    </Segment>
                    </Segment> 
                    
            </Grid.Column>   
            <Grid.Column stretched>
                    <CompleteOrderDetail />
            </Grid.Column>
            </Grid.Row>
            
       </Grid>
    </> );
};
export default CompleteOrder;
