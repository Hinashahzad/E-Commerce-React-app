
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card, Placeholder } from 'semantic-ui-react'
const ShoppingCartComponent = () =>
{
    const bagProducts = useSelector( ( state ) => state.card.products );
    
   const renderList= bagProducts.map( ( product ) =>
    {
       console.log( product.image );
       return ( <>
       <Card >
            <img src={product.image} width={250} height={345}></img>
            <Card.Content>
                <Card.Header>{ product.quantity }</Card.Header>
                <Card.Description> Total ${ product.price * product.quantity } </Card.Description>
                </Card.Content>
           </Card>
           <Placeholder> { product.Description}</Placeholder>
       </> )
    })
    
    return ( <>{renderList}</> );
};
export default ShoppingCartComponent