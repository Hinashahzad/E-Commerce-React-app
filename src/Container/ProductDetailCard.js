import { Grid, Segment, Modal, Card, Header,Image, Menu, Rating,Dimmer, Loader, Divider, Button } from 'semantic-ui-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, updateSelectedProduct } from '../Stores/action/productAction';
import HeaderComponent from '../Component/Header/HeaderComponent';
import FooterComponent from '../Component/Footer/FooterComponent';
import { OpenModalAction, CloseModalAction } from '../Stores/action/ModalAction';
import { increment, decrement, reset } from '../Stores/action/CounterAction';
import { Link } from "react-router-dom";
import MenuExampleTabular from '../Component/MenuExampleTabular/MenuExampleTabular';
import { subTotal } from '../Stores/action/SubTotal';

const ProductDetailCard = () =>
{
    const counter = useSelector( ( state ) => state.count ); //Reducer count manage the product count with the help of two actions INCREMENT AND DECREMENT
    const updatedProduct = useSelector( ( state ) => state.updateProduct );
    const product = useSelector( ( state ) => state.product ); // Reducer--> product: selectedProductReducer,
    const card = useSelector( ( state ) => state.card.products );   // card is the reducer inside index.js and const initialState = { products: [] }
    const modalState = useSelector( ( state ) => state.modal );  // modal is the reducer inside index.js and this select the state to display the Modal
    const dispatch = useDispatch();
    var total = 0;
    const renderList = card.map( ( selectedProduct ) =>
    {
        const { image, id, title, quantity, price } = selectedProduct;
            return ( <>
            <Modal.Content image>
            <img src={image} width={230} height={200}></img>
                <Modal.Description padded="very">
                   <div> <b>Name:</b> <p> { title } </p></div>
                    <div> <b>Quantity:</b> {quantity} </div>
                    <div> <b>Price: </b> ${ price } </div>
                    {total= total + (quantity*price)}
                </Modal.Description>
                </Modal.Content>
            <Divider></Divider>
        </> )
    } )

    /**
     * 
     * This function checks that if the item is already in the shopping bag then 
     * rather to add the item again in the bag it update the quantity of the items which 
     * is already in the bag
     */
    const updateCard = (value) =>
    {
        card.map( ( selectedProduct ) =>
        {
            if ( selectedProduct.id === product.id )
            {
                /**
                 * Remove the previous item in the bag
                 */
                const updatedCard = card.filter( ( cardProduct ) =>
                {
                    return cardProduct.id !== selectedProduct.id;
                })
                dispatch(addToCart([ ...updatedCard,{quantity:selectedProduct.quantity+value, ...product} ]))
                
            }
        })
    }
    const handleAddToBag = () =>
    {      
        if ( Object.keys( card ).length > 0 )
        {
            const result = card.filter( ( cardItems ) => product.id === cardItems.id );
            if (Object.keys( result ).length === 0 )
            {
                dispatch( addToCart( [ ...card, { quantity: counter, ...product } ] ) ); // dispatch selected Product into the Bag 
                dispatch( OpenModalAction( "blurring" ) );
            }
            else
            {
                console.log( counter );
                alert("This product is already in the cart ");
                updateCard(counter);
            }
        }
        else
        {
            dispatch( addToCart( [ ...card, { quantity: counter, ...product } ] ) ); // dispatch selected Product into the Bag 
            dispatch( OpenModalAction( "blurring" ) );
        }
    }
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
                <Button icon='minus' onClick={()=>{ if(counter>1) dispatch(decrement(counter-1))}}></Button>
            </Button.Group >   
            <pre><Button.Group basic size='large' padded="very">
                <Button secondary content="+ ADD TO BAG" 
                    onClick={ handleAddToBag } /> 
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
                    dispatch(subTotal(total))
                }
        }> CONTINUE SHOPPING </Button></Link>
                <Link to ="/ShoppingCart">
                <Button secondary onClick={ () =>
                {
                    dispatch( CloseModalAction() );
                        dispatch( reset( counter ) );
                        dispatch(subTotal(total))
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