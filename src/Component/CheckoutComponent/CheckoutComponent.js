import React from 'react'
import { Icon, Segment, Step } from 'semantic-ui-react'
import { CheckoutGridComponent } from '../CheckoutGridComponent/CheckoutGridComponent';
import FooterComponent from '../Footer/FooterComponent';
import HeaderComponent from '../Header/HeaderComponent';

const CheckoutComponent = () =>
{
    return ( <>
        
        {/**Attached Header Component */}
        <HeaderComponent />
        <Segment>
        <Step.Group widths={ 3 }>
    <Step>
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
          {/**Calling checkout grid */}
                <CheckoutGridComponent />
            </Segment>
            
        </Segment>
        {/**Attached Footer Component */ }
        <Segment>
            <FooterComponent />
        </Segment>
    </> );
}
export default CheckoutComponent;