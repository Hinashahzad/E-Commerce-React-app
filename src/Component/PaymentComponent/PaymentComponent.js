import React from 'react';
import { Step, Icon, Button, Loader, Segment, Container } from 'semantic-ui-react'
import HeaderComponent from '../Header/HeaderComponent';
import FooterComponent from '../Footer/FooterComponent';
import { CompleteOrderComponent } from '../CompleteOrderComponent/CompleteOrderComponent';
export const PaymentComponent = () => {
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
              <CompleteOrderComponent />
        </Segment>
            
        </Segment>
        {/**Attached Footer Component */ }
        <Segment>
            <FooterComponent />
        </Segment>
        </>
    );
};
