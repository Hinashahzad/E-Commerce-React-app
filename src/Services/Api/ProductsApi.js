import { useSelector } from "react-redux";
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
  
  const isLoading = useSelector((state) => state.product.isLoading)
  const error = useSelector((state) => state.product.error)

  if (isLoading) {
    return 'loading...'
  }

  if (error) {
    return error
  }
};
export default ProductsApi;