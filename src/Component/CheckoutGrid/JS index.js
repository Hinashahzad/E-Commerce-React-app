import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Segment, Grid, Header,  Label,  Icon} from 'semantic-ui-react'
import ShippingAddressForm from '../../Container/ShippingAddressForm/JS index';
import LoginForm from '../../Container/LoginForm/JS index';
import { showLogin } from '../../Store/UserSlice/JS index';
import CompleteOrderDetail  from '../../Container/CompleteOrderDetail/JS index';

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
                
                  <Segment> <ShippingAddressForm /></Segment>
                </div> )
            }

      </Grid.Column>
      <Grid.Column  >
            <CompleteOrderDetail />
          </Grid.Column>
        </Grid.Row>
      </Grid></>
    
    
    );
};
export default CheckoutGrid;