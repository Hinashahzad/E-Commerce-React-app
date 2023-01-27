import { Grid, Segment, Modal, Card, Header,Image, Menu, Rating,Dimmer, Loader, Divider, Button } from 'semantic-ui-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/action/productAction';
import HeaderComponent from '../UserInterface/Header/HeaderComponent';
import FooterComponent from '../UserInterface/Footer/FooterComponent';
import { OpenModalAction } from '../../redux/action/ModalAction';
import { CloseModalAction } from '../../redux/action/ModalAction';
import { increment, decrement, reset } from '../../redux/action/CounterAction';
import { Link } from "react-router-dom";
import MenuExampleTabular from './MenuExampleTabular';

const ProductDetailCard = () =>
{
    const counter = useSelector( ( state ) => state.count ); //Reducer count manage the product count with the help of two actions INCREMENT AND DECREMENT
    const product = useSelector( ( state ) => state.product ); // Reducer--> product: selectedProductReducer,
    const card = useSelector( ( state ) => state.card.products );   // card is the reducer inside index.js and const initialState = { products: [] }
    const modalState = useSelector( ( state ) => state.modal );  // modal is the reducer inside index.js and this select the state to display the Modal
    const dispatch = useDispatch();
    
    const renderList = card.map( ( selectedProduct ) =>
    {
        const { image, title, quantity, price } = selectedProduct;
        return ( <>
            <Modal.Content image>
            <img src={image} width={230} height={200}></img>
                <Modal.Description padded="very">
                   <div> <b>Name:</b> <p> { title } </p></div>
                    <div> <b>Quantity:</b> {quantity} </div>
                    <div> <b>Price: </b> ${price} </div>
                </Modal.Description>
                </Modal.Content>
            <Divider></Divider>
        </> )
    })
    return ( <div>
        {/**HEADER COMPONENT */}
        <Segment textAlign="center" color="olive"><HeaderComponent /></Segment>
        {/**BODY COMPONENT */}
        {/** If there is no product in the website */}
        { Object.keys( product ).length === 0
            ?( <Segment>
                <Dimmer active>
                <Loader />
                </Dimmer>
            </Segment> )
            :(
        <Segment color="pink" padded="very" placeholder>
        <Grid columns={2} padded>
            <Grid.Column>
                <Card size="huge">
                     <img src={product.image} width={450} height={450}></img>            
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Header as='h2'>
                <Header.Content>{product.title}</Header.Content>
                </Header>
                    <h4 style={{color:"red"}}> Price: ${product.price }</h4>
                            <div style={ { display: "flex" } }><pre>Availability: <h4 style={{color:"green"}}>In stock</h4> </pre>  </div>
                        <br />
        { /*<Rating maxRating={ 8 } rating={ product.rating.rate } clearable /> */ }
        {/** Update the Number of items */}
            <Button.Group basic size='large'>
                <Button icon='plus' onClick={ () =>{ dispatch( increment( counter ) );} } ></Button>
                <Button> { counter }</Button>
                <Button icon='minus' onClick={()=>{ if(counter>=1) dispatch(decrement(counter-1))}}></Button>
            </Button.Group >   
            <pre><Button.Group basic size='large' padded="very">
                <Button secondary content="+ ADD TO BAG" 
                    onClick={ () =>{
                    console.log( "Add to Bag" );
                    dispatch( addToCart( [ ...card, { quantity: counter, ...product } ] ) ); // dispatch selected Product into the Bag 
                    dispatch( OpenModalAction( "blurring" ) ) } } /> 
                            </Button.Group></pre>
                           
           {/** Calling Details and Size  */}
            <MenuExampleTabular />
            </Grid.Column>
            </Grid>    
            </Segment>
            ) }
        {/**Modal Codding */}                    
            <Modal dimmer={modalState.dimmer} open={modalState.open} onClose={() => dispatch(CloseModalAction())}>
                <Modal.Header>The following product has been added to Shopping Cart</Modal.Header>
                {renderList}
                <Modal.Actions>
                <Link to={`/` }><Button onClick={ () =>
                {
                    dispatch( CloseModalAction() );
                    dispatch( reset( counter ) );
                }
        }> CONTINUE SHOPPING </Button></Link>
                <Link to ="/ShoppingCart">
                <Button secondary onClick={ () =>
                {
                    dispatch( CloseModalAction() );
                    dispatch( reset( counter ) );
                } }> CHECK OUT</Button></Link>
                </Modal.Actions>
        </Modal> 
        {/**Footer Component */}
        <Segment>
            <FooterComponent/>
        </Segment>
    </div>)
}

export default ProductDetailCard;