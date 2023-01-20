import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {setProduct} from './../../redux/action/productAction'

/**
 * Functional Component: Callining Fake api through axios
 */
const ProductApi = () =>
{
    const dispatch = useDispatch();
    const fetchProducts = async () =>
    {
        const response = await axios
            .get( 'https://fakestoreapi.com/products/' )
            .catch( ( error ) =>
            {
                console.log( "Error", error );
            } );
        dispatch(setProduct( ( response.data ))) ;
    }
    useEffect( () =>
    {
        fetchProducts();
    }, [] );
    
};
export default ProductApi;