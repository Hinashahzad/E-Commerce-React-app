import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { selectedProductReducer } from './../../redux/reducer/productReducer';
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () =>
{
    const product = useSelector( ( state ) => state.product ); // Reducer--> product: selectedProductReducer,
    const { productId } = useParams();
    console.log( productId );
    const dispatch = useDispatch();
    console.log( product );
    
    // Function to get the individual product id through axios
    const fetchProductDetails = async () =>
    {
        const response = await axios
            .get( `https://fakestoreapi.com/products/${ productId }` )
            .catch( ( error ) =>
            {
                console.log( "Error", error );
            } );
        dispatch( selectedProductReducer( response.data ) );
    };

    useEffect( () =>
    {
        if ( productId && productId !== "" ) { fetchProductDetails(); }
        
    }, [ productId ] );
    

    return (
        <div>
           ProductDetails
        </div>
    )
};

export default ProductDetails;