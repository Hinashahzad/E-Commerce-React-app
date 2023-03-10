import React from 'react'
import { Icon, Segment, Step } from 'semantic-ui-react'
import CheckoutGrid from '../CheckoutGrid/JS index';
import HeaderBar from '../Header/HeaderBar/JS index';
import FooterBar from '../Footer/FooterBar/JS index';

const Checkout = () =>
{
    return ( <>
        
        {/**Attached Header Component */}
        <HeaderBar />
        <Segment>
    <Step.Group widths={ 3 }>
    <Step active>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
      </Step.Content>
    </Step>
    <Step >
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
          {/**Calling checkout grid */}
                <CheckoutGrid />
            </Segment>
            
        </Segment>
        {/**Attached Footer Component */ }
        <Segment>
            <FooterBar />
        </Segment>
    </> );
}
export default Checkout;