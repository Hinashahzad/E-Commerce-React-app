import React,{useEffect} from "react";
import { Grid, Segment } from 'semantic-ui-react'
import { useSelector } from "react-redux";
import Product from '../../features/product/Product';
import { useDispatch } from "react-redux";
import { fetchAsyncProducts } from "../../features/product/productSlice";
//import { useGetProductsQuery } from '../../../Services/Api/productsApi';
const Body = () =>
{
    //const { data, error, isLoading } = useGetProductsQuery();
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
    return (
        <div>
            <Segment color="green" >
                <Grid centered><Product /></Grid>
            </Segment>
        </div>
    )
}
export default Body;