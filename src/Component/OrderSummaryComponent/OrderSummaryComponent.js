import { Table,Button } from 'semantic-ui-react'
import React from "react";
import { useSelector } from 'react-redux';
import { ApplyDiscountComponent } from '../ApplyDiscountComponent/ApplyDiscountComponent';
const OrderSummaryComponent = () =>
{
  
  const subTotal = useSelector( ( state ) => state.subTotal );
  return ( <>
      {/**APPLY DISCOUNT COMPONENT */}
          <ApplyDiscountComponent />
    <Table celled color='black' striped  padded textAlign='center'>
     <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine textAlign='center' colSpan='2' >ORDER SUMMARY</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
            <Table.Cell> Subtotal </Table.Cell>
            <Table.Cell> ${subTotal} </Table.Cell>
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
            <Table.Cell singleLine><b>ORDER TOTAL</b></Table.Cell>
            <Table.Cell>{ subTotal+1+(subTotal *4)/100 }</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell colSpan='2'><Button secondary fluid > CHECKOUT</Button></Table.Cell>
        </Table.Row>
    </Table.Body>
      </Table>
     
    </> );
};
export default OrderSummaryComponent;