import React from 'react';
import { Table, Input, Segment } from 'semantic-ui-react'
import { discount } from './../../Stores/action/SubTotal';
import { useDispatch, useSelector } from 'react-redux'

export const ApplyDiscountComponent = () =>
{
    const discountCode = "DISCOUNT";
    const Value = useSelector( ( state ) => state.discount );
    const dispatch = useDispatch();
    
    console.log(Value);
    const handleClick = () =>
    {
        if ( Value === discountCode )
        {
            alert( "DIsCOUNT has been applied to your ORDER" );
            dispatch( discount( ( 0.05 ) ) );
        }
        else
        {
            alert( "INVALID CODE" );
            dispatch( discount( ( 0 ) ) );

        }
    }
    const handleInputChange = ( e ) =>
    {
        e.preventDefault();
        dispatch( discount( ( e.target.value ) ) );
        
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
                labelPosition: 'left',
                icon: 'percent',
                content: 'Apply Discount',
                onClick: () => handleClick()
                }}
                type="text"
                actionPosition='left'
                placeholder='Enter discount code'
                onChange={ handleInputChange }
                value={Value}
                fluid/>
    </Segment>
    
    </div>);
};
