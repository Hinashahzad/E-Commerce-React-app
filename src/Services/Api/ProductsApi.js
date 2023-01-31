import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {setProduct} from '../../Stores/action/productAction'

/**
 * Functional Component: Callining Fake api through axios
 * Dispatch all the Products into the Redux SetProduct
 */
const ProductsApi = () =>
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
export default ProductsApi;