import React from 'react';
import { Divider, Segment} from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import ApplyDiscount from '../ApplyDiscount/ApplyDiscount';
const CompleteOrderDetail = () =>
{
    const subTotal = useSelector( ( state ) => state.shoppingCart.cartTotalAmount );
    const discount = useSelector( ( state ) => state.discount );
    console.log(discount);
    return ( <div>
        
             {/**APPLY DISCOUNT COMPONENT */}
            <ApplyDiscount />
           
            <Segment placeholder> <h5> Subtotal : { subTotal }</h5>
            <h5> Shipping Cost: {50} </h5> 
                    <Divider />
                    {(discount)? (<h5> TOTAL : {subTotal + 50 +0.05 }</h5>) :(<h5> TOTAL : {subTotal + 50 }</h5>)  }
            
            <Divider /></Segment>       
        
    </div>);
};
export default CompleteOrderDetail;
