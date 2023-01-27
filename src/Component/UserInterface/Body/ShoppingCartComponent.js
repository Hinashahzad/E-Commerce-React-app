
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Segment, Button, Table} from 'semantic-ui-react'
import FooterComponent from "../Footer/FooterComponent";
import {increment} from '././../../../redux/action/CounterAction'

const ShoppingCartComponent = () =>
{
    const bagProducts = useSelector( ( state ) => state.card.products );
    
    const dispatch = useDispatch();
    const renderList = bagProducts.map( ( product ) =>
    {
        console.log( "Product id : "+product.id );
        const { id, image, price, quantity } = product;
       return ( <>
        
           <Table.Row>
            <Table.Cell>
            <img src={image} width={100} height={100}></img>
            </Table.Cell>
            <Table.Cell singleLine> ${ price}
            </Table.Cell>
            <Table.Cell>
                <Button.Group basic size='large'>
                <Button icon='plus' onClick={ () =>
                       {
                           console.log(quantity);
                           console.log( "Button clicked " );
                       } } ></Button>
                       <Button> { quantity }</Button>
                           <Button icon='minus' onClick={ () =>
                           {
                           } }></Button>
                </Button.Group >
            </Table.Cell>
            <Table.Cell textAlign='right'>
            ${price * quantity}
            </Table.Cell>
        </Table.Row>
        
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
                <Table.Body>
                    {renderList}
                </Table.Body>
                </Table>
                
            <Segment>
                <FooterComponent />
            </Segment>
     </div>);
};
export default ShoppingCartComponent;
