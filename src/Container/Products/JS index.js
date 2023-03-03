import React,{useEffect} from "react";
import { Grid, Segment, Card } from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchAsyncProducts } from "../../Store/ProductSlice/JS index";
//import { useGetProductsQuery } from '../../../Services/Api/productsApi';
const Products = () =>
{
    //const { data, error, isLoading } = useGetProductsQuery();
    const products = useSelector( (state)=>state.product.products );
    const dispatch = useDispatch();
    
    useEffect( () =>
    {
        dispatch(fetchAsyncProducts());
    }, [dispatch] );
  
  const isLoading = useSelector((state) => state.product.isLoading)
  const error = useSelector((state) => state.product.error)

  if (isLoading) {
      return (<div>{ isLoading }</div>)
  }
  if (error) {
      return (<div>{ error }</div>)
    }
    const renderList = products.map( ( product ) =>
    {
        //Destructuring the products array
        const { id, image, title, price} = product;
        return (
            <Segment color="purple" padded="very" key={product.id}>
                <Link to={`/product/${id}`}>
                <Card key={ id } >
                    <img src={image} width={250} height={345}></img>
                    <Card.Content>
                        <Card.Header as="h3">{ title }</Card.Header>
                        <Card.Description> ${ price } </Card.Description>
                        </Card.Content>
                    </Card>
                    </Link>
        </Segment>)
    })
    return (
        <div>
            <Segment color="green" >
                <Grid centered> { renderList }</Grid>
            </Segment>
        </div>
    )
}
export default Products;