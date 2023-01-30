import { Table, Label, Divider, Button } from 'semantic-ui-react'
import React from "react";
import { useDispatch } from 'react-redux';
const OrderSummaryComponent = () =>
{
  
 
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
            <Table.Cell> Subtotal ki variable </Table.Cell>
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