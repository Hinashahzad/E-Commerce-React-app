import React from 'react';
import { useSelector } from 'react-redux';
import {Segment, Grid, Header, Divider, Input, Label} from 'semantic-ui-react'
import LoginForm from '../../Container/LoginForm';
import OrderSummaryComponent from '../OrderSummaryComponent/OrderSummaryComponent';
import { ShippingAddress } from '../ShippingAddress/ShippingAddress';
import { Link } from "react-router-dom";
export const CheckoutGridComponent = () =>
{
  const activeUser = useSelector( ( state ) => state.activeUser );
  console.log( activeUser );
    return ( <>
    <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column width={10}>
        <Segment clearing>
                <Header as='h3' floated='left'>Contact information</Header>
                <Header as='h5' floated='right'> Already have an account?
                <Label size='large' as="a" color='blue'> Log in</Label></Header>
        </Segment>
            <Segment.Group ><Input type="email" placeholder="Email" fluid size='large'></Input></Segment.Group> 
            <Link to={ `/Registration` }><a>Registration?</a></Link>
            <Header as="h2"> SHIPPING ADDRESS</Header>
            <Divider />
            { /*<Segment><ShippingAddress /></Segment> */}
        
      </Grid.Column>
      <Grid.Column  >
            { /**Calling Order summary Component */}<OrderSummaryComponent /> </Grid.Column>
        </Grid.Row>
      </Grid></>
    
    
    );
};
