import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
//import { productsApi } from '../../Services/Api/productsApi';
import productReducer from './ProductSlice/JS index';
import shoppingCartReducer from './ShoppingCartSlice/JS index';
import userReducer  from './UserSlice/JS index';
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