import React from 'react';
import {Segment, Grid, Header, Divider} from 'semantic-ui-react'
import LoginForm from '../../Container/LoginForm';
import OrderSummaryComponent from '../OrderSummaryComponent/OrderSummaryComponent';
export const CheckoutGridComponent = () => {
    return ( <>
    <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column width={10}>
        <Segment>
        <Header as="h2"> Your Account details</Header>
                        <Divider></Divider>
                        {/**If user is already registered */}
            <LoginForm />
            <Divider></Divider>
        </Segment>
      </Grid.Column>
                <Grid.Column stretched textAlign='center' padded>
                    <OrderSummaryComponent />

      </Grid.Column>
      </Grid.Row>
  </Grid></> );
};
