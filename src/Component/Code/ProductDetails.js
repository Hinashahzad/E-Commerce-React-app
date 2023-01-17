import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import { selectProduct } from './../../redux/action/productAction';
import axios from "axios";

const ProductDetails = () =>
{
    const product = useSelector( ( state ) => state.product ); // Reducer--> product: selectedProductReducer,
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log( product );
    
    // Function to get the individual product id through axios
    const fetchProductDetails = async () =>
    {
        console.log( "inside fetchProductDetails" );
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch( ( error ) =>
            {
                console.log( "Error", error );
            } );
        console.log( response.data );
        dispatch( selectProduct( response.data ) );
    };

    useEffect( () =>
    {
        console.log("ProductId is ", productId);
        if ( productId && productId !== "" )
        { fetchProductDetails(); }
        
    }, [ productId ] );
    

    return (
        <div>
           ProductDetails
        </div>
    )
};

export default ProductDetails;