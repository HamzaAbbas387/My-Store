// import { createSlice } from "@reduxjs/toolkit";        


// const initialState = {
//     product: [],
//     items: [],
//     quantity: 1,
//     totalQuantity: 0,
//     totalPrice: 0,
    
// };

// export const productSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {   
//         addToCart: (state,action) => {
//             const item = action.payload;
//             let find = state.product.findIndex((items) => items.id === action.payload.id);
//             if(find >= 0){
//                 state.product[find].quantity += 1;
//             }
//             else{
//                 state.product.push({ ...item });
//             }
//         },   

//         getCartTotal: (state) => {
//             let {totalQuantity,totalPrice} = state.product.reduce(
//                 (cartTotal, cartItem) => {
//                     const {price} = cartItem;
//                     const Price = price
//                     const quantity = state.quantity
//                     const Total = Price*quantity;
//                     cartTotal.totalPrice += Total;
//                     cartTotal.totalQuantity += quantity;

//                     return cartTotal;
//                 },
//                 {
//                     totalPrice : 0,
//                     totalQuantity : 0,
//                 } 
//             );
//             state.totalPrice = totalPrice.toFixed(2);
//             state.totalQuantity = totalQuantity;
//         },

//         removeItem : (state,action) => {
//             state.product = state.product.filter((item => item.id !== action.payload))
//         },
//         // increaseItemQuantity: (state,action) => {
//         //     state.product = state.product.map((items) => {
//         //         if(items.id === action.payload){
//         //             return {...items, quantity: items.quantity + 1 };
//         //         }
//         //         return items;
//         //     });
//             increaseItemQuantity: (state, action) => {
//                 const id = action.payload;
//                 const item = state.cartItems.find((items) => items.id === id);
//                 if (item) {
//                   item.quantity += 1;
//                 }
//               },
//         decreaseItemQuantity: (state,action) => {
//             state.product = state.product.map((items) => {
//                 if(items.id === action.payload){
//                     return {...items, quantity: items.quantity - 1 };
//                 }
//                 return items;
//             });
//         },
// },


// // use extra reducers for apis
// // use redux thunk

// });


// export default productSlice.reducer;

// export const {addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = productSlice.actions;


import { createSlice } from "@reduxjs/toolkit";        

const initialState = {
    product: [], 
    totalQuantity: 0, 
    totalPrice: 0, 
};

export const productSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {   
        addToCart: (state, action) => {
            const item = action.payload;
            const findIndex = state.product.findIndex((items) => items.id === item.id);
            
            if (findIndex >= 0) {
                state.product[findIndex].quantity += 1;
            } else {
                state.product.push({ ...item, quantity: 1 });
            }
        },   

        getCartTotal: (state) => {
            const { totalQuantity, totalPrice } = state.product.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;

                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );

            state.totalPrice = totalPrice.toFixed(2);
            state.totalQuantity = totalQuantity;
        },

        removeItem: (state, action) => {
            state.product = state.product.filter((item) => item.id !== action.payload);
        },

        increaseItemQuantity: (state, action) => {
            const id = action.payload;
            const item = state.product.find((items) => items.id === id);
            if (item) {
                item.quantity += 1;
            }
        },

        decreaseItemQuantity: (state, action) => {
            const id = action.payload;
            const item = state.product.find((items) => items.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },
});

export default productSlice.reducer;

export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = productSlice.actions;
