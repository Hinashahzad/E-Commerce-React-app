import React from 'react';
import { Step, Icon, Button, Loader, Segment, Container } from 'semantic-ui-react'
import HeaderBar from '../Header/HeaderBar/JS index';
import Footer from '../Footer/FooterBar/JS index' ;
import CompleteOrder from '../CompleteOrder/JS index';
import FooterBar from '../Footer/FooterBar/JS index';
const Payment = () => {
    return (
        <>
            {/**Attached Header Component */}
        <HeaderBar />
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
            <FooterBar />
        </Segment>
        </>
    );
};
export default Payment;
