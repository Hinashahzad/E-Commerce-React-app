import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SelectProduct from "./../../Component/features/product/SelectProduct";
import { removeSelectedProduct } from '../../Component/features/product/productSlice';
import { useDispatch } from "react-redux";
import { fetchAsyncSingleProduct } from '../../Component/features/product/productSlice';

const SingleProductApi = () =>
{
    const { productId } = useParams();
    const dispatch = useDispatch();
    
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