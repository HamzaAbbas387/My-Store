import { createSlice } from "@reduxjs/toolkit";         



const initialState = {
    product: [],
    items: {quantity: 1},
    totalQuantity: 0,
    totalPrice: 0,
    
};

export const productSlice = createSlice({
    name: "user",
    initialState,
    reducers: {   
        addToCart: (state,action) => {
            let find = state.product.findIndex((items) => items.id === action.payload.id);
            if(find >= 0){
                state.product[find].quantity += 1;
            }
            else{
                state.product.push(action.payload);
            }
        },   

        // addToCart: (state, action) => {
        //     const item = action.payload;
        //     const existingItem = state.cartItems.find(i => i.id === item.id);
        //     if (existingItem) {
        //       existingItem.quantity += 1;
        //     } else {
        //       state.cartItems.push({ ...item, quantity: 1 });
        //     }
        //   },

        getCartTotal: (state) => {
            let {totalQuantity,totalPrice} = state.product.reduce(
                (cartTotal, cartItem) => {
                    const {price} = cartItem;
                    const Price = price
                    const quantity = 1;
                    const Total = Price*quantity;
                    cartTotal.totalPrice += Total;
                    cartTotal.totalQuantity += quantity;

                    return cartTotal;
                },
                {
                    totalPrice : 0,
                    totalQuantity : 0
                } 
            );
            state.totalPrice = totalPrice.toFixed(2);
            state.totalQuantity = totalQuantity;
        },

        removeItem : (state,action) => {
            state.product = state.product.filter((item => item.id !== action.payload))
        },
        increaseItemQuantity: (state,action) => {
            state.product = state.product.map((items) => {
                if(items.id === action.payload){
                    return {...items, quantity: items.quantity + 1 };
                }
                return items;
            });
        },
        decreaseItemQuantity: (state,action) => {
            state.product = state.product.map((items) => {
                if(items.id === action.payload){
                    return {...items, quantity: items.quantity - 1 };
                }
                return items;
            });
        },
},


// use extra reducers for apis
// use redux thunk

});


export default productSlice.reducer;

export const {addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = productSlice.actions;