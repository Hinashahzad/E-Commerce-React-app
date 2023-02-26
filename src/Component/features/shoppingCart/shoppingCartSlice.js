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
                console.log("Else part is running ...");
                const tempProduct ={...payload, quantity:state.productQuantity, cartTotal:state.productQuantity*payload.price}
                state.cart.push( tempProduct );
            }
            
        },
        incrementCartQuantity: (state, {payload} ) =>
        {
            console.log("Payload ki quantity is", payload.productQuantity);
            const itemIndex = state.cart.findIndex(
                ( item ) => item.id === payload.id );
            if ( itemIndex >= 0 )
            {
                state.cart[ itemIndex ].productQuantity += 1;
                //state.productQuantity = payload.productQuantity + 1;
                state.cart[itemIndex].cartTotal = state.cart[itemIndex].productQuantity * payload.price;
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
                        //state.productQuantity = payload.productQuantity - 1;
                        state.cart[ itemIndex ].cartTotal = state.cart[ itemIndex ].productQuantity * payload.price;
                    }
            }
            
        },
        updateCardQuantity: (state, { payload } ) =>
        {
            state.productQuantity = payload;
        },
        updateCartTotal: (state, {payload}) =>
        {
             state.cartTotal = state.productQuantity * payload;
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
            
        },
        resetCartProductQuantity: (state) =>
        {
            state.productQuantity = 1;
        }, 
        deleteCart: (state) => {
            state.cart = []
        }, 
        increment: (state, {payload}) =>
        {
            state.productQuantity += 1;
        }, 
        decrement: (state, {payload}) =>
        {
            state.productQuantity -= 1;
        },
        resetCartTotal: ( state ) =>
        {
            state.cartTotal = 0;
        }
    }
} );

export const { addToCart,
    updateCardQuantity,
    updateCartTotalAmount,
    openModal,
    closeModal,
    applyDiscount,
    resetCartProductQuantity,
    incrementCartQuantity,
    decrementCartQuantity,
    updateCartTotal,
increment, decrement,resetCartTotal } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
/** IMPORTANT : WANT TO GET THE VALUE FROM THE  STORE WE CAN WRITE THE FUNCTION HERE AS WELL */