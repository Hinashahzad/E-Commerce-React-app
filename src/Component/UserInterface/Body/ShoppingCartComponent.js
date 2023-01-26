
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card, Placeholder, Table} from 'semantic-ui-react'
const ShoppingCartComponent = () =>
{
    const bagProducts = useSelector( ( state ) => state.card.products );
    
   const renderList= bagProducts.map( ( product ) =>
    {
       console.log( product.image );
       return ( <>
           <Table.Body>
        <Table.Row>
            <Table.Cell>
            <img src={product.image} width={100} height={100}></img>
            </Table.Cell>
            <Table.Cell singleLine> ${ product.price}
            </Table.Cell>
            <Table.Cell>{product.quantity} </Table.Cell>
            <Table.Cell textAlign='right'>
            ${product.price * product.quantity}
            </Table.Cell>
        </Table.Row>
        </Table.Body>
       </> )
    })
    
    return ( 
        <div>
            <Table celled padded collapsing color="black"  >
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>PRODUCT</Table.HeaderCell>
                <Table.HeaderCell>PRICE</Table.HeaderCell>
                <Table.HeaderCell>QTY</Table.HeaderCell>
                <Table.HeaderCell>SUBTOTAL</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
                {renderList}
            </Table>
     </div>);
};
export default ShoppingCartComponent;

