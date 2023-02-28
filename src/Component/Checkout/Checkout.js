import React from 'react'
import { Icon, Segment, Step } from 'semantic-ui-react'
import CheckoutGrid from '../CheckoutGrid/CheckoutGrid';
import HeaderComponent from '../Header/Header';
import Footer from '../Footer/Footer';

const Checkout = () =>
{
  
    return ( <>
        
        {/**Attached Header Component */}
        <HeaderComponent />
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
            <Footer />
        </Segment>
    </> );
}
export default Checkout;