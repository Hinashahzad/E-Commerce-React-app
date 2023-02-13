import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Segment, Grid, Header, Divider, Input, Label, Button, Icon} from 'semantic-ui-react'
import OrderSummaryComponent from '../OrderSummaryComponent/OrderSummaryComponent';
import { ShippingAddress } from '../ShippingAddress/ShippingAddress';
import LoginForm from '../../Container/LoginForm';
import { showLogin } from '../../Stores/action/ShowLogin';

export const CheckoutGridComponent = () =>
{
  
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
              <Header as='h5' floated='right'> 
              <Label as='a' pointing onClick={ handLoginClick }>  <Icon size= "large" name='sign in' />{ show ? 'Continue as guest' : 'Log in'}</Label></Header>
        </Segment>
            { show ? ( <div> <LoginForm />
            </div> )
              : ( <div >
               
                  <Segment><ShippingAddress /></Segment>
                </div> )
            }

      </Grid.Column>
      <Grid.Column  >
            { /**Calling Order summary Component */}<OrderSummaryComponent /> </Grid.Column>
        </Grid.Row>
      </Grid></>
    
    
    );
};
