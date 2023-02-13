import React from 'react';
import { Container, Divider, Segment} from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import { ApplyDiscountComponent } from '../ApplyDiscountComponent/ApplyDiscountComponent';

export const CompleteOrderDetailComponent = () =>
{
    const subTotal = useSelector( ( state ) => state.subTotal );
    const discount = useSelector( ( state ) => state.discount );
    console.log(discount);
    return ( <div>
        <Container >
             {/**APPLY DISCOUNT COMPONENT */}
            <ApplyDiscountComponent />
            <Container textAlign='left'>
            <Segment placeholder> <h5> Subtotal : { subTotal }</h5>
            <h5> Shipping Cost: {50} </h5> 
                    <Divider />
                    {(discount)? (<h5> TOTAL : {subTotal + 50 +0.05 }</h5>) :(<h5> TOTAL : {subTotal + 50 }</h5>)  }
            
            <Divider /></Segment>
           </Container>
                       
        </Container>
    </div>);
};
