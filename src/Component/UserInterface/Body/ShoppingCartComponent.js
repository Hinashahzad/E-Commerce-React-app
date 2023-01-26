
import React,{useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Segment, Button, Table, Placeholder } from 'semantic-ui-react'
import FooterComponent from "../Footer/FooterComponent";


const ShoppingCartComponent = () =>
{
    const bagProducts = useSelector( ( state ) => state.card.products );
    const counter = useSelector( ( state ) => state.count );
    const dispatch = useDispatch();
    const [ state, setState ] = useState( counter );
    console.log(state);
    const renderList = bagProducts.map( ( product ) =>
    {
        console.log( "Product id : "+product.id );
        
       return ( <>
        
           <Table.Row>
            <Table.Cell>
            <img src={product.image} width={100} height={100}></img>
            </Table.Cell>
            <Table.Cell singleLine> ${ product.price}
            </Table.Cell>
            <Table.Cell>
                <Button.Group basic size='large'>
                           <Button icon='plus' onClick={ () =>
                       {
                           console.log("Button clicked ");
                           } } ></Button>
                <Button> { product.quantity  }</Button>
                           <Button icon='minus' onClick={ () =>
                           {
                           } }></Button>
                </Button.Group >
            </Table.Cell>
            <Table.Cell textAlign='right'>
            ${product.price * product.quantity}
            </Table.Cell>
        </Table.Row>
        
       </> )
    })
    
    return ( 
        <div>
            
            <Table celled padded collapsing color="black"  >
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>PRODUCT</Table.HeaderCell>
                <Table.HeaderCell>PRICE</Table.HeaderCell>
                <Table.HeaderCell>QTY</Table.HeaderCell>
                <Table.HeaderCell>SUBTOTAL</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
                <Table.Body>
                    {renderList}
                </Table.Body>
                </Table>
                
            <Segment>
                <FooterComponent />
            </Segment>
     </div>);
};
export default ShoppingCartComponent;

