import { Table,Button } from 'semantic-ui-react'
import React from "react";
import { useSelector } from 'react-redux';
const OrderSummaryComponent = () =>
{
  
  const subTotal = useSelector( ( state ) => state.subTotal );
  console.log(subTotal);
    return ( <>
        
    <Table celled color='black' striped>
     <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine textAlign='center' colSpan='2' >ORDER SUMMARY</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
            <Table.Cell> Subtotal </Table.Cell>
            <Table.Cell> {subTotal} </Table.Cell>
      </Table.Row>
      <Table.Row>
            <Table.Cell>FBR service charges</Table.Cell>
            <Table.Cell>FBR service charges</Table.Cell>
                </Table.Row>
        <Table.Row>
            <Table.Cell>ORDER TOTAL</Table.Cell>
            <Table.Cell>total value</Table.Cell>
                </Table.Row>
        <Table.Row>
            <Table.Cell colSpan='2'><Button secondary fluid > CHECKOUT</Button></Table.Cell>
        </Table.Row>
    </Table.Body>
  </Table>
    </> );
};
export default OrderSummaryComponent;