import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Segment, Grid, Header,  Label,  Icon} from 'semantic-ui-react'
import ShippingAddress from '../ShippingAddress/ShippingAddress';
import LoginForm from '../features/user/LoginForm';
import { showLogin } from '../features/user/userSlice';
import CompleteOrderDetail  from '../CompleteOrderDetail/CompleteOrderDetail';

const CheckoutGrid = () =>
{
  const loginForm = useSelector( ( state ) => state.user.showLoginForm );
  const dispatch = useDispatch();
  const handLoginClick = () =>
  {
    dispatch(showLogin(!loginForm));
  }
    return ( <>
    <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column width={10}>
        <Segment clearing>
              <Header as='h3' floated='left'>Contact information</Header>
              <Header as='h5' floated='right'> 
              <Label as='a' pointing onClick={ handLoginClick }>  <Icon size= "large" name='sign in' />{ loginForm ? 'Continue as guest' : 'Log in'}</Label></Header>
        </Segment>
            { loginForm ? ( <div> <LoginForm />
            </div> )
              : ( <div >
                
                  <Segment> <ShippingAddress /></Segment>
                </div> )
            }

      </Grid.Column>
      <Grid.Column  >
            { /**Calling Order summary Component */}<CompleteOrderDetail /> </Grid.Column>
        </Grid.Row>
      </Grid></>
    
    
    );
};
export default CheckoutGrid;