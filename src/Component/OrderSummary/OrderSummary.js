import React, { useEffect } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import ApplyDiscount from '../ApplyDiscount/ApplyDiscount';
import { updateCartTotalAmount } from '../features/shoppingCart/shoppingCartSlice';

export const OrderSummary = () =>
{
  const shoppingCart = useSelector( ( state ) => state.shoppingCart.cart );
  const cartTotalAmount = useSelector( ( state ) => state.shoppingCart.cartTotalAmount );
  const discount = useSelector( ( state ) => state.shoppingCart.cartDiscount );
  const dispatch = useDispatch();
  
  useEffect( () =>
  {
    let sum = 0;
    shoppingCart.map( ( item ) =>
    {
       sum += item.cartTotal;
    } )
    dispatch( updateCartTotalAmount( sum ) );
  }, [dispatch])
  return ( <div>
      <ApplyDiscount />
        <Table celled color='black' striped  padded textAlign='center'>
     <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine textAlign='center' colSpan='2' >ORDER SUMMARY</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
            <Table.Cell> Subtotal </Table.Cell>
            <Table.Cell> ${cartTotalAmount} </Table.Cell>
      </Table.Row>
      <Table.Row>
            <Table.Cell>FBR service charges</Table.Cell>
            <Table.Cell> $1 </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Tax</Table.Cell>
            <Table.Cell>4%</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>Discount</Table.Cell>
          <Table.Cell>{ discount }</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell singleLine><b>ORDER TOTAL</b></Table.Cell>
          <Table.Cell>${ cartTotalAmount+1+(cartTotalAmount *4)/100 - discount}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan='2'>
            <Link to ={`Checkout`}>
              <Button secondary fluid > CHECKOUT</Button>
            </Link>
          </Table.Cell>
        </Table.Row>
    </Table.Body>
      </Table>
     
    </div>);
};
export default OrderSummary;