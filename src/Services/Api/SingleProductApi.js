import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SelectProduct from "./../../Component/features/product/SelectProduct";
import { selectProduct, removeSelectedProduct } from '../../Component/features/product/productSlice';
import { useDispatch } from "react-redux";

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
        if ( productId && productId !== "" )
        { fetchProductDetails(); }
        return () =>
        {
            dispatch( removeSelectedProduct() );
        }
        
    }, [ productId ] );
    return (
        <div>
            <SelectProduct />
        </div>
    )
};
export default SingleProductApi;