import { Grid, Segment, Image, Card, Header, Rating, Button,  Divider } from 'semantic-ui-react';
import React from 'react';
import {useSelector} from 'react-redux'

const ProductDetailCard = () =>
{
    const product = useSelector( ( state ) => state.product ); // Reducer--> product: selectedProductReducer,
    return ( <div>
        <Segment textAlign="center" color="olive">
                 <h2 >Selected Product</h2>
            </Segment>
           <Segment color ="pink" padded="very" placeholder>
        <Grid columns={2} padded>
            <Grid.Column>
                <Card size="huge">
                     <Image fluid src={product.image} ></Image>       
                </Card>
            </Grid.Column>
            <Grid.Column>
                <Header as='h2'>
                    <Header.Content>{ product.title}</Header.Content>
                        </Header>
                        <h4> Price: ${ product.price }</h4>
                        <h4>Availability: In stock  </h4> 
                    { /*<Rating maxRating={ 8 } rating={ product.rating.rate } clearable /> */ }
                    <div > <Button.Group basic size='large'>
                    <Button icon='plus' />
                    <Button  />
                        <Button icon='minus' />
                        <>&ensp; &ensp; &ensp;
                        </>  
                    </Button.Group >
                        <Button.Group basic  size='large' padded="very">
                                <Button icon='cart' content="Add to bag" />
                            </Button.Group>
                           
                    
                    </div>

                
                    <Header as='h3'>
                    <Header.Content>Details</Header.Content>   
                        </Header>
                        <Divider></Divider>
                <Header as='h4'>
                        <Header.Content>Description: </Header.Content>
                        <p>{ product.description }</p>
                        <Header.Content>Catagory: </Header.Content> <p>{ product.category}</p>
                </Header>
                 
            </Grid.Column>
                </Grid>
        </Segment>
    </div>)
}

export default ProductDetailCard;