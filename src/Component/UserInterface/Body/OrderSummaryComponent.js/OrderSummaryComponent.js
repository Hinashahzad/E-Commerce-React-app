import { Table, Label } from 'semantic-ui-react'
import React from "react";
const OrderSummaryComponent = () =>
{
    return ( <>
    <Table celled color='black'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell> Order Summary </Table.HeaderCell>
        <Table.HeaderCell>       </Table.HeaderCell>
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
    </Table.Body>
  </Table>
    </> );
};
export default OrderSummaryComponent;