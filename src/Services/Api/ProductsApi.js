import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncProducts } from "../../Component/features/product/productSlice";


const ProductsApi = () =>
{
    const dispatch = useDispatch();
    useEffect( () =>
    {
        dispatch(fetchAsyncProducts());
    }, [dispatch] );
    
};
export default ProductsApi;