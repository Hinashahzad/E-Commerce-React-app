import { Grid, Segment, Modal, Card, Header,Image,  Rating,Dimmer, Loader, Button,  Divider } from 'semantic-ui-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/action/productAction';
import HeaderComponent from '../UserInterface/Header/HeaderComponent';
import FooterComponent from '../UserInterface/Footer/FooterComponent';
import { OpenModalAction } from '../../redux/action/ModalAction';
import { CloseModalAction } from '../../redux/action/ModalAction';
import { render } from '@testing-library/react';


const ProductDetailCard = () =>
{
    const [ counter, setCounter ] = useState( 1 );
    const product = useSelector( ( state ) => state.product ); // Reducer--> product: selectedProductReducer,
    const card = useSelector( ( state ) => state.card.products );   // card is the reducer inside index.js and const initialState = { products: [] }
    console.log(card.title);
    const dispatch = useDispatch();
    const modalState = useSelector( ( state ) => state.modal );  // modal is the reducer inside index.js and this select the state to display the Modal
    const { dimmer, open } = modalState;

    const renderList = card.map( ( selectedProduct ) =>
    {
        return ( <>
            <Modal.Content image>
            <Image size='small' src={selectedProduct.image} wrapped />
                <Modal.Description>
                    Name: <p>{ selectedProduct.title }</p>
                    Quantity: <p>{ selectedProduct.quantity }</p>
                    Price: <p> ${ selectedProduct.price }</p>
                    </Modal.Description>
            </Modal.Content>
        </> )
    })
    return ( <div>
        <Segment textAlign="center" color="olive">
                 <HeaderComponent />
        </Segment>
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
                        <h4> Price: ${product.price }</h4>
                        <h4>Availability: In stock  </h4> 
                    { /*<Rating maxRating={ 8 } rating={ product.rating.rate } clearable /> */ }
                <div>
                {/** Update the Number of items */}
                <Button.Group basic size='large'>
                <Button icon='plus' onClick={()=>{ setCounter(counter+1) }} ></Button>
                                    <Button> { counter }</Button>
                    <Button icon='minus' onClick={()=>{ if(counter>=1) setCounter(counter-1) }}></Button>
                                </Button.Group >   
                 <pre><Button.Group basic size='large' padded="very">
                                    <Button onClick={ () =>
                                    {
                                        console.log( "Add to Bag" );
                                        dispatch( addToCart( [ ...card, { quantity: counter, ...product } ] ) ); // dispatch selected Product into the Bag 
                                        dispatch( OpenModalAction( "blurring" ) ) 
                                    } }> Add to Bag </Button>
                                </Button.Group>
                                    </pre>
                                <Modal
                                    dimmer={dimmer}
                                    open={open}
                                    onClose={() => dispatch(CloseModalAction())}>
                                    <Modal.Header>The following product has been added to Shopping Cart</Modal.Header>
                                    {renderList}
                                    <Modal.Actions>
                                    <Button negative onClick={() => dispatch(CloseModalAction())}>
                                        CONTINUE SHOPPING
                                    </Button>
                                    <Button positive onClick={() => dispatch(CloseModalAction())}>
                                        CHECK OUT
                                    </Button>
                                    </Modal.Actions>
                                </Modal>
                               
                                    
                
                        </div>            
                <Header as='h3'>
                    <Header.Content>Details</Header.Content>   
                </Header>
                <Divider></Divider>
                <Header as='h4'>
                    <Header.Content>Description: </Header.Content>
                    <p>{product.description}</p>
                    <Header.Content>Catagory: </Header.Content> <p>{product.category}</p>
                </Header>
            </Grid.Column>
                    </Grid>
                    <Segment>
                        <FooterComponent />
                    </Segment>
                </Segment>
                
            )}
    </div>)
}

export default ProductDetailCard;