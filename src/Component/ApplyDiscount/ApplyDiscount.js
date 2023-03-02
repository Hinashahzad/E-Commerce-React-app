import React from 'react';
import { Table, Input, Segment } from 'semantic-ui-react'
import { applyDiscount } from '../../Store/shoppingCartSlice';
import { useDispatch, useSelector } from 'react-redux'


const ApplyDiscount = () =>
{
    const cartDiscount = useSelector( ( state ) => state.shoppingCart.cartDiscount );
    const dispatch = useDispatch();
    const handleClick = () =>
    {
        if ( cartDiscount === 0 )
        {
            alert("INVALID CODE");
        }
        else{alert("VALID CODE")}
    }
    const handleInputChange = ( e ) =>
    {
        e.preventDefault();
        dispatch( applyDiscount( ( e.target.value ) ) );
        
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
            
                fluid/>
    </Segment>
    
    </div>);
};
export default ApplyDiscount;
