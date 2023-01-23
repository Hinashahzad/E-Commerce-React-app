import { Grid, Segment, Image, Card, Header, Rating,Dimmer, Loader, Button,  Divider } from 'semantic-ui-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/action/productAction';

const ProductDetailCard = () =>
{
    const [ counter, setCounter ] = useState( 1 );
    const product = useSelector( ( state ) => state.product ); // Reducer--> product: selectedProductReducer,
    console.log(product);
    const card = useSelector( ( state ) => state.card.products );
    console.log(card);
    const dispatch = useDispatch();
    return ( <div>
        <Segment textAlign="center" color="olive">
                 <h2 >Selected Product</h2>
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
                                        dispatch(addToCart([...card, {  quantity: counter, ...product }]))

                                    } }> Add to Bag </Button>
                                </Button.Group>
                </pre>
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
            </Segment>
            )}
    </div>)
}

export default ProductDetailCard;