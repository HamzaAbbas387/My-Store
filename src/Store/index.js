// import { configureStore } from '@reduxjs/toolkit'
// import productSlice from './Slices/productSlice'
// import cardSlice from './Slices/cardSlice'

// export const store = configureStore({
//   reducer: {
//     products : cardSlice,
//     cart : productSlice
//   },
// })


import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Slices/productSlice';
import cardSlice from './Slices/cardSlice';

export const store = configureStore({
  reducer: {
    products: cardSlice,  // Handles product listing
    cart: productSlice    // Handles cart actions (add, remove, etc.)
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),  // Optional: You can add custom middleware here if needed
});

export default store;
