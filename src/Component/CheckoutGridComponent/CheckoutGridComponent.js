import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Segment, Grid, Header, Divider, Input, Label, Button} from 'semantic-ui-react'
import OrderSummaryComponent from '../OrderSummaryComponent/OrderSummaryComponent';
import { ShippingAddress } from '../ShippingAddress/ShippingAddress';
import LoginForm from '../../Container/LoginForm';
import { showLogin } from '../../Stores/action/ShowLogin';
import { Link } from "react-router-dom";
export const CheckoutGridComponent = () =>
{
  const activeUser = useSelector( ( state ) => state.activeUser );
  const show = useSelector( ( state ) => state.showLogin );
  const dispatch = useDispatch();
  const handLoginClick = () =>
  {
    dispatch(showLogin(!show));
  }
    return ( <>
    <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column width={10}>
        <Segment clearing>
                <Header as='h3' floated='left'>Contact information</Header>
                <Header as='h5' floated='right'> Already have an account?
                <Button onClick={ handLoginClick }>{ show ? 'Continue as guest' : 'Log in'}</Button></Header>
            </Segment>
              { show ? ( <div><LoginForm /></div> )
                : ( <div >
                  <Segment>
                  <Segment.Group >
                    <Input type="email" placeholder="Email" fluid size='large'></Input>
                    </Segment.Group>
                    </Segment>
                </div> )
            }
            <Link to={ `/Registration` }><a>Registration?</a></Link>
        
            <Header as="h2"> SHIPPING ADDRESS</Header>
            <Divider />
            { <Segment><ShippingAddress /></Segment> }
        
      </Grid.Column>
      <Grid.Column  >
            { /**Calling Order summary Component */}<OrderSummaryComponent /> </Grid.Column>
        </Grid.Row>
      </Grid></>
    
    
    );
};
