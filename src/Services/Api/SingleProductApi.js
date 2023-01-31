import React, { useEffect } from "react";
import {useDispatch} from 'react-redux'
import { useParams } from "react-router-dom";
import { selectProduct, removeSelectedProduct } from '../../Stores/action/productAction';
import axios from "axios";
import ProductDetailCard from "../../Container/ProductDetailCard";
/**
 * 
 * Product Details: Get one product detail through the API 
 * Dispatch the selected product into the Redux
 */
const SingleProductApi = () =>
{
    const { productId } = useParams();
    const dispatch = useDispatch();
    // Function to get the individual product id through axios
    const fetchProductDetails = async () =>
    {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch( ( error ) =>
            {
                console.log( "Error", error );
            } );
        dispatch( selectProduct( response.data ) );
    };
    useEffect( () =>
    {
        console.log("ProductId is ", productId);
        if ( productId && productId !== "" )
        { fetchProductDetails(); }
        return () =>
        {
            dispatch( removeSelectedProduct() );
        }
        
    }, [ productId ] );
    return (
        <div>
            <ProductDetailCard />
        </div>
    )
};

export default SingleProductApi;