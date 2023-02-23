import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Fetching AsyncProducts using Redux thunk middleware
export const fetchAsyncProducts = createAsyncThunk( "products/fetchAsyncProducts",
    async (id=null, {rejectWithValue} ) =>{                         // Second object is thunkApi={dispatch, getState, extra, requestId, signal, rejectWithValue(Value, meta)}
        try
        {
            const response = await axios
                .get( 'https://fakestoreapi.com/products/' );
            return response.data;
        }
        catch ( error )
        {
            return rejectWithValue( "Unable to loading the Products" );
        }
    } )
//Fetching AsyncSingleProduct using Redux thunk middleware    
export const fetchAsyncSingleProduct = createAsyncThunk( "singleProduct/fetchAsyncSingleProduct",
    async (productId, {rejectWithValue}) =>
    {
        try{
        const response = await axios.get( `https://fakestoreapi.com/products/${ productId }` );
            return response.data;
        }
        catch ( error )
        {
            return rejectWithValue("Unable to fetch Product..")
        }
    } );

export const initialState = {
    products: [], 
    isLoading: false,
    error:null,
    singleProduct: [], 
    productQuantity: 1,
    productTotal: 0,
    activeTab:"Details",  //For display details(product description and category), Sizes
}
const productSlice = createSlice( {
    name: "product", //name of reducer
    initialState, // initial state
    reducers: {
        addProduct: (state, { payload }) =>     //ACTION NO 1: addProduct
        {
            state.products = payload;
        }, 
        selectProduct: (state, {payload}) =>    //AcTION NO 2: SelectProduct
        {
            state.singleProduct = payload;
        }, 
        removeSelectedProduct: (state) =>       //Action No 3: RemoveSelected Product
        {
            state.singleProduct= {}
        }, 
        increaseProductQuantity: (state) =>     //Action No 4: increased product quantity
        {
           state.productQuantity +=1
        },
        decreaseProductQuantity: ( state ) =>  //Action No 5: Decreased Product quantity
        {
            state.productQuantity -=1
        },
        resetProductQuantity: ( state ) =>    //Action No 3: Reset Product quantity to 1
        {
            state.productQuantity=1
        }, 
        updateProductTotal: ( state, { payload } ) =>
        {
            state.productTotal = state.productQuantity * payload;
        }, 
        setActiveTab: ( state, { payload } ) =>
        {
            state.activeTab = payload;
        }
       
    }, 
    /**EXTRA REDUCERS TO MANAGE THE ASYNCRONOUS ACTIONS FOR API CALL FOR BOTH SINGLE PRODUCT AND ALL PRODUCTS */
    extraReducers:  (builder) =>{
            builder.addCase( fetchAsyncProducts.pending, ( state ) =>
            {
                state.isLoading = true;
            } )
            builder.addCase( fetchAsyncProducts.fulfilled, ( state, { payload } ) =>
            {
                state.isLoading = false;
                state.products = payload;
                
            } )
            builder.addCase( fetchAsyncProducts.rejected, ( state, { payload } ) =>
            {
                state.isLoading = false;
                state.error = payload;
            } )
            builder.addCase( fetchAsyncSingleProduct.pending, ( state ) => {
            state.isLoading = true;
            })
            builder.addCase( fetchAsyncSingleProduct.fulfilled, ( state,{ payload } ) =>
            {
                state.isLoading = false;
                state.singleProduct = payload;
            } )
            builder.addCase( fetchAsyncSingleProduct.rejected, ( state, {payload} ) =>
            {
                state.isLoading = false;
                state.error = payload;
            } )
    }
} );
export const {  addProduct,
                selectProduct,
                removeSelectedProduct,
                increaseProductQuantity,
                decreaseProductQuantity,
                resetProductQuantity,
                updateProductTotal,
    setActiveTab } = productSlice.actions;
/** IMPORTANT : WANT TO GET THE VALUE FROM THE  STORE WE CAN WRITE THE FUNCTION HERE AS WELL */
export const getProducts = ( state ) => state.product.products;
export default productSlice.reducer;