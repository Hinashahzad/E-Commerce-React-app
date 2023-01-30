import React from 'react'
import { Table } from 'semantic-ui-react'

const SizeTableComponent = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center'>Size</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Shoulder (in)</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Chest (in)</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Sleeves Length (in)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell textAlign='center'>6</Table.Cell>
        <Table.Cell textAlign='center'>13</Table.Cell>
        <Table.Cell textAlign='center'>17</Table.Cell>
        <Table.Cell textAlign='center'>21</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign='center'>8</Table.Cell>
        <Table.Cell textAlign='center'>13.5</Table.Cell>
        <Table.Cell textAlign='center'>18</Table.Cell>
        <Table.Cell textAlign='center'>21</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell textAlign='center'>10</Table.Cell>
        <Table.Cell textAlign='center'>14</Table.Cell>
        <Table.Cell textAlign='center'>19</Table.Cell>
        <Table.Cell textAlign='center'>22</Table.Cell>
            </Table.Row>
        <Table.Row>
        <Table.Cell textAlign='center'>12</Table.Cell>
        <Table.Cell textAlign='center'>14.5</Table.Cell>
        <Table.Cell textAlign='center'>20</Table.Cell>
        <Table.Cell textAlign='center'>22</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
    </Table.Footer>
  </Table>
)

export default SizeTableComponent;