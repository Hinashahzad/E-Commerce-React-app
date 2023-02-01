import React,{useState} from 'react';
import { Table, Input,Message, Segment, Placeholder } from 'semantic-ui-react'
import MessageComponent from '../Message/MessageComponent';

export const ApplyDiscountComponent = () =>
{
    const discountCode = "DISCOUNT";
    const [Value, setValue] = useState("")
    
    const handleClick = () =>
    {
        {
            ( Value == discountCode ) ?
            ( alert("DIsCOUNT has been applied to your ORDER") ) :
            alert( "INVALID CODE" );
            setValue( "" );  }
    }
    const handleInputChange = ( e ) =>
    {
         setValue(e.target.value);
    }
    return ( <div>
    <Segment>
    <Table celled color='black' striped  padded textAlign='center'>
     <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine textAlign='center' colSpan='2' >APPLY DISCOUNT CODE</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
        </Table>
            <Input
                action={{
                color: 'black',
                labelPosition: 'right',
                icon: 'percent',
                content: 'Apply Discount',
                onClick: () => handleClick()
                }}
                type="text"
                actionPosition='right'
                placeholder='Enter discount code'
                onChange={ handleInputChange }
                value={Value}
                fluid/>
    </Segment>
    
    </div>);
};
