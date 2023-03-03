import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registeredUsers: [],
    singleUser: [],
    showLoginForm: true,
    shippingDetails:[]
    
}
const userSlice = createSlice( {
    name: "user",
    initialState,
    reducers: {
        addUser: (state, {payload}) =>
        {
            state.registeredUsers = payload;
        }, 
        activeUser: ( state, { payload } ) =>
        {
            state.singleUser = payload;
        },
        removeActiveUser: (state,) =>
        {
            state.activeUser= {}
        },
        showLogin: (state, {payload}) =>
        {
            state.showLoginForm = payload;
        }, 
        updateShippingDetails: (state,{payload}) =>
        {
            state.shippingDetails = payload;
        }
        
    }
} );
export const { addUser,
    activeUser,
    removeActiveUser,
    showLogin,
    updateShippingDetails } = userSlice.actions;
export default userSlice.reducer;