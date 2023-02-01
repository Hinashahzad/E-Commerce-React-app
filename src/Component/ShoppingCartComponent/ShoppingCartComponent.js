import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Segment, Button, Table, Dimmer, Loader, Grid, Card} from 'semantic-ui-react'
import FooterComponent from "../Footer/FooterComponent";
import OrderSummaryComponent from "../OrderSummaryComponent/OrderSummaryComponent";

const ShoppingCartComponent = () =>
{
    const bagProducts = useSelector( ( state ) => state.card.products );
    console.log( bagProducts );
    const renderList = bagProducts.map( ( product ) =>
    {
        const { image, price, quantity } = product;
       return ( <>
           <Table.Row>
            <Table.Cell>
            <img src={image} width={100} height={100}></img>
            </Table.Cell>
            <Table.Cell singleLine> ${ price }</Table.Cell>
            <Table.Cell>
                <Button.Group basic size='large'>
                <Button icon='plus' onClick={ () =>
                       {
                           console.log(quantity);
                           console.log("Button clicked");
                       } } ></Button>
                       <Button> { quantity }</Button>
                        <Button icon='minus' onClick={ () =>
                           {
                           } }></Button>
                </Button.Group>
            </Table.Cell>
            <Table.Cell textAlign='right'>
                   $ {price*quantity}
            </Table.Cell>
        </Table.Row>
       </> )
    })
    return ( 
        <div>
    <Grid columns={2}>
            <Grid.Column width={8}>
            <Table celled padded color="black" textAlign="center" >
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
            </Grid.Column>
            <Grid.Column width={5} >
               
            {/**CONDITIONAL RENDERING */}
                    { Object.keys( bagProducts ).length === 0
                        ? (     <Segment>
                                <Dimmer active> ORDER SUMMARY
                                <Loader />
                                </Dimmer>
                                </Segment> )
                                : ( <OrderSummaryComponent /> ) }
    </Grid.Column>
  </Grid>
            {/**FOOTER COMPONENT */}
            <Segment>
                <FooterComponent />
            </Segment>
     </div>);
};
export default ShoppingCartComponent;

