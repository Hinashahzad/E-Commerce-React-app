import React,{useEffect} from 'react';
import{
    Grid,
    Segment,
    Card,
    Header,
    Dimmer,
    Loader,
    Button} from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import ProductSizeDetail from '../../Component/ProductSizeDetail/JS index';
import{
    addToCart,
    increaseProductQuantity,
    decreaseProductQuantity } from '../../Store/shoppingCartSlice';
import { useNavigate } from "react-router-dom";
import { openModal } from '../../Store/shoppingCartSlice';
import { useParams } from "react-router-dom";
import { fetchAsyncSingleProduct } from '../../Store/productSlice';
import { removeSelectedProduct } from '../../Store/productSlice';
        
const ProductDetail = () =>
{
    const { productId } = useParams();
    const productQuantity = useSelector( ( state ) => state.shoppingCart.productQuantity );
    const product = useSelector( ( state ) => state.product.singleProduct );
    const cartTotal = useSelector( ( state ) => state.shoppingCart.cartTotal );
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect( () =>
    {
        if ( productId && productId !== "" )
        { dispatch(fetchAsyncSingleProduct(productId)) }
        return () =>
        {
            dispatch( removeSelectedProduct() );
        }
        
    }, [ productId ] );
    
    const handelAddToBag = () =>
    {
        dispatch( addToCart( { productQuantity, cartTotal, ...product } ) );
        dispatch( openModal() );
        navigate( '/ShoppingCartModal' );
    }
    return ( <div>
       
        {/** If there is no product in the website */}
        { Object.keys( product ).length === 0
            ?( <Segment>
                <Dimmer active>
                <Loader />
                </Dimmer>
            </Segment> )
            :(<Segment color="pink" padded="very" placeholder>
        <Grid columns={2} padded>
            <Grid.Column>
                <Card size="huge" key={product.id}>
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
                <Button icon='plus'
                    onClick={ () =>{dispatch( increaseProductQuantity(product) );} } />
                <Button>{ productQuantity}</Button>
                <Button icon='minus' onClick={ () =>{dispatch( decreaseProductQuantity(product) );} } ></Button>
            </Button.Group >   
            <pre><Button.Group basic size='large' padded="very">
            <Button secondary content="+ ADD TO BAG" fluid  onClick={handelAddToBag} /> 
            </Button.Group></pre>
                           
           {/** Calling Details and Size  */}
           <ProductSizeDetail />
            </Grid.Column>
            </Grid>    
            </Segment>
            ) }
    </div>)
}

export default ProductDetail;