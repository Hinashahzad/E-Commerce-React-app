import React from 'react';
import { Step, Icon, Button, Loader, Segment, Container } from 'semantic-ui-react'
import HeaderComponent from '../Header/Header';
import Footer from '../Footer/Footer' ;
import CompleteOrder from '../CompleteOrder/CompleteOrder';
const Payment = () => {
    return (
        <>
            {/**Attached Header Component */}
        <HeaderComponent />
        <Segment>
    <Step.Group widths={ 3 }>
    <Step >
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='credit card' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
      </Step.Content>
    </Step>
    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
            </Step.Group>
        <Segment >
          {/*Payment details*/}
              <CompleteOrder />
        </Segment>
            
        </Segment>
        {/**Attached Footer Component */ }
        <Segment>
            <Footer />
        </Segment>
        </>
    );
};
export default Payment;
