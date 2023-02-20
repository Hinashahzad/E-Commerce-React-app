import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Component/features/product/productSlice";


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
        dispatch( addProduct( response.data ) );
    }
    useEffect( () =>
    {
        fetchProducts();
    }, [] );
    
};
export default ProductsApi;