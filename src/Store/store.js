import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
//import { productsApi } from '../../Services/Api/productsApi';
import productReducer from '../Store/productSlice';
import shoppingCartReducer from '../Store/shoppingCartSlice';
import userReducer  from '../Store/userSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,                      
    shoppingCart: shoppingCartReducer,
    user: userReducer,
    //[productsApi.reducerPath]:productsApi.reducer,         //productsApi  
  },
  /*middleware: ( getDefaultMiddleware ) =>                  //Adding middleware
    getDefaultMiddleware().concat( productsApi.middleware )*/
} );

setupListeners(store.dispatch)