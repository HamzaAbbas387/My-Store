import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Slices/productSlice';
import cardSlice from './Slices/cardSlice';

export const store = configureStore({
  reducer: {
    products: cardSlice,
    cart: productSlice 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
