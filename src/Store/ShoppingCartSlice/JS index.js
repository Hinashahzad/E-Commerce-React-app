import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [], 
    cartTotalAmount: 0,
    cartTotal:0,
    productQuantity: 1, 
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
                state.cart[ itemIndex ].cartTotal += state.productQuantity * payload.price;
            }
            else
            {
                const tempProduct ={...payload, quantity:state.productQuantity, cartTotal:state.productQuantity*payload.price}
                state.cart.push( tempProduct );
            }
        },
        incrementCartQuantity: (state, {payload} ) =>
        {
            const itemIndex = state.cart.findIndex(
                ( item ) => item.id === payload.id );
            if ( itemIndex >= 0 )
            {
                state.cart[ itemIndex ].productQuantity += 1;
                state.cart[ itemIndex ].cartTotal = state.cart[ itemIndex ].productQuantity * payload.price;
                state.cartTotalAmount += state.productQuantity * payload.price;
            }
        },
        decrementCartQuantity: (state, {payload} ) =>
        {
            if ( payload.productQuantity > 1 )
            {
                const itemIndex = state.cart.findIndex(
                ( item ) => item.id === payload.id );
                if ( itemIndex >= 0 )
                    {
                    state.cart[ itemIndex ].productQuantity -= 1;
                    state.cart[ itemIndex ].cartTotal = state.cart[ itemIndex ].productQuantity * payload.price;
                    state.cartTotalAmount -= state.productQuantity * payload.price;
                    }
            }
        },
        deleteItem: (state, {payload}) =>
        {
            console.log( payload.id );
            state.cart = state.cart.filter( ( item ) => item.id !== payload.id );
            state.cartTotalAmount = state.cartTotalAmount - payload.cartTotal;
        }, 
        updateCartTotal: (state, {payload}) =>
        {
             state.cartTotal = state.productQuantity * payload;
        },
        updateCartTotalAmount: (state, {payload}) =>
        {
             state.cartTotalAmount = payload;
        },
        openModal: (state) =>
        {
            state.openCardModal = true;
            state.modalDimmer = "blurring";
            
            state.productQuantity = 1;
        },
        resetShoppingCart: (state) =>
        {
            state.openCardModal = false;
            state.modalDimmer = undefined;
            state.productQuantity = 1;
            state.cartTotal = 0;
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
        },
        deleteCart: (state) => {
            state.cart = []
        }, 
        increaseProductQuantity: (state, { payload }) =>
        {
            state.productQuantity += 1;
            state.cartTotal = state.productQuantity * payload.price;
        }, 
        decreaseProductQuantity: ( state,{payload} ) =>
        {
            if ( state.productQuantity > 1 )
            {
                state.productQuantity -= 1;
                state.cartTotal = state.productQuantity * payload.price;
            }
        },
        
    }
} );
export const {
    addToCart,
    updateCardQuantity,
    updateCartTotalAmount,
    openModal,
    closeModal,
    applyDiscount,
    incrementCartQuantity,
    decrementCartQuantity,
    updateCartTotal,
    increaseProductQuantity,
    decreaseProductQuantity,
    resetCartTotal,
    resetShoppingCart,
    deleteItem} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
/** IMPORTANT : WANT TO GET THE VALUE FROM THE  STORE WE CAN WRITE THE FUNCTION HERE AS WELL */