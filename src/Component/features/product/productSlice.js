import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    products: [], 
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
        increaseProductQuantity: (state) =>     
        {
           state.productQuantity +=1
        },
        decreaseProductQuantity: ( state ) =>
        {
            state.productQuantity -=1
        },
        resetProductQuantity: ( state ) =>
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
       
    } // number of reducers
} );
export const {  addProduct,
                selectProduct,
                removeSelectedProduct,
                increaseProductQuantity,
                decreaseProductQuantity,
                resetProductQuantity,
                updateProductTotal,
                setActiveTab} = productSlice.actions;
export default productSlice.reducer;