import React from "react";
import {  useDispatch, useSelector } from 'react-redux';
import { Segment, Button, Icon, Message, Table, Dimmer, Loader, Grid, Header} from 'semantic-ui-react'
import OrderSummary from '../../OrderSummary/OrderSummary';
import { incrementCartQuantity, decrementCartQuantity, deleteItem } from "./shoppingCartSlice";

const ShoppingCartComponent = () =>
{
    const shoppingCartItems = useSelector( ( state ) => state.shoppingCart.cart );
    const dispatch = useDispatch();
    return ( 
        <>
            { Object.keys( shoppingCartItems ).length === 0 ?
                ( <Segment textAlign="center" fluid="true">
                 <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                    <Message.Header>There is no item in shopping bag<Icon name ="shopping bag" size="large"></Icon></Message.Header>
                    </Message.Content>
                </Message>
                </Segment> ) :
                ( <div key={shoppingCartItems.id}>
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
                    { shoppingCartItems.map( ( item ) =>
                         <Table.Row>
                            <Table.Cell>
                            <img src={item.image} width={100} height={100}></img>
                            </Table.Cell>
                            <Table.Cell singleLine> ${ item.price }</Table.Cell>
                            <Table.Cell>
                            <Button.Group basic size='large'>
                                <Button icon='plus'
                                        onClick={ () =>
                                        {
                                            dispatch( incrementCartQuantity( item ) );
                                            //dispatch(updateCartTotalAmount(item.price));
                                        } } />
                                <Button>{ item.productQuantity}</Button>
                                <Button icon='minus' onClick={ () =>
                                { dispatch( decrementCartQuantity( item ) );
                                        //dispatch(updateCartTotalAmount(item.price));
                                    
                                } } ></Button>
                            </Button.Group >   
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                                $ { item.cartTotal }
                                <br/><br/>
                                <span> <Icon name="delete" size="big" style={ { color: "red" } } onClick={ () =>
                                {
                                    dispatch( deleteItem(item) );
                                }}></Icon></span>
                            </Table.Cell>
                            </Table.Row>
                            
                   )}
                       
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
                        </div>)}
     </>);
};
export default ShoppingCartComponent;

