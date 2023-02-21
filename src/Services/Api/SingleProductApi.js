import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SelectProduct from "./../../Component/features/product/SelectProduct";
import { selectProduct, removeSelectedProduct } from '../../Component/features/product/productSlice';
import { useDispatch } from "react-redux";
import { fetchAsyncSingleProduct } from '../../Component/features/product/productSlice';


const SingleProductApi = () =>
{
    const { productId } = useParams();
    const dispatch = useDispatch();
    // Function to get the individual product id through axios
    
    useEffect( () =>
    {
        if ( productId && productId !== "" )
        { dispatch(fetchAsyncSingleProduct(productId)) }
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