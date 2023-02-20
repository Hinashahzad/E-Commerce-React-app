import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [], 
    cartTotalAmount: 0, 
    productQuantity: 0, 
    openCardModal: false,
    modalDimmer: undefined,
    cartDiscount:0,
}
const shoppingCartSlice = createSlice( {
    name: "shoppingCart", 
    initialState, 
    reducers: {
        addToCart: (state, { payload }) =>
        {
            const itemIndex = state.cart.findIndex(
                ( item ) => item.id === payload.id );
            if ( itemIndex >= 0 )
            {
                state.cart[ itemIndex ].productQuantity += state.productQuantity;
            }
            else
            {
                const tempProduct ={...payload, quantity:state.productQuantity}
                state.cart.push( tempProduct );
            }
            
        },
        updateCardQuantity: (state, { payload } ) =>
        {
            state.productQuantity = payload;
        },
        updateCartTotalAmount: ( state, { payload } ) =>
        {
            state.cartTotalAmount += payload;
        }, 
        openModal: (state) =>
        {
            state.openCardModal = true;
            state.modalDimmer = "blurring";
        },
        closeModal: (state) =>
        {
            state.openCardModal = false;
            state.modalDimmer = undefined;
        },
        applyDiscount: (state, {payload}) =>
        {
            

            if ( payload==="DISCOUNT" )
            {
                state.cartTotalAmount -= 0.05;
                state.cartDiscount =0.05
            }
            else
            {
                state.cartTotalAmount -= 0;
                state.cartDiscount =0.0
            }
            
        }
    }
} );

export const { addToCart,
    updateCardQuantity,
    updateCartTotalAmount,
    openModal,
    closeModal,
applyDiscount} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;