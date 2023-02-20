import React from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { Segment, Button, Table, Dimmer, Loader, Grid, Card, Header} from 'semantic-ui-react'
import OrderSummary from '../../OrderSummary/OrderSummary';


const ShoppingCartComponent = () =>
{
    const shoppingCartItems = useSelector( ( state ) => state.shoppingCart.cart );
    const dispatch = useDispatch();
    const renderList = shoppingCartItems.map( ( item ) =>
    {
        const { image, price, productQuantity } = item;
       return ( <>
           <Table.Row>
            <Table.Cell>
            <img src={image} width={100} height={100}></img>
            </Table.Cell>
            <Table.Cell singleLine> ${ price }</Table.Cell>
            <Table.Cell>
                <Button.Group basic size='large'>
                    <Button> { productQuantity }</Button>
                </Button.Group>
            </Table.Cell>
            <Table.Cell textAlign='right'>
                   $ {price*productQuantity}
            </Table.Cell>
        </Table.Row>
       </> )
    })
    return ( 
        <div>
    <Grid columns={2}>
            <Grid.Column width={8}>
            <Table celled padded color="black" textAlign="center" >
                <Table.Header>
                <Table.Row>
                <Table.HeaderCell>PRODUCT</Table.HeaderCell>
                <Table.HeaderCell>PRICE</Table.HeaderCell>
                <Table.HeaderCell>QTY</Table.HeaderCell>
                <Table.HeaderCell>TOTAL</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
            <Table.Body>
                    {renderList}
            </Table.Body>
            </Table>
            </Grid.Column>
            <Grid.Column width={5} >
               
            {/**CONDITIONAL RENDERING */}
                    { Object.keys( shoppingCartItems ).length === 0
                        ? (     <Segment> <Header as="h4" textAlign="center"> ORDER SUMMARY </Header>
                                <Dimmer page> 
                                <Loader />
                                </Dimmer>
                                </Segment> )
                                : ( <OrderSummary/> ) }
    </Grid.Column>
  </Grid>
          
     </div>);
};
export default ShoppingCartComponent;

