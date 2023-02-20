import { configureStore } from '@reduxjs/toolkit'
import productReducer from './product/productSlice';
import shoppingCartReducer from './shoppingCart/shoppingCartSlice';
import userReducer  from './user/userSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    user:userReducer,
  },
})