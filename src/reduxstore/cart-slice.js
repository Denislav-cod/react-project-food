import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: defaultCartState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingCartItemIndex = state.items.findIndex(item => item.id === newItem.id);
            const existingCartItem = state.items[existingCartItemIndex];
            state.totalPrice = state.totalPrice + newItem.price * newItem.amount;
            if(!existingCartItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    amount: newItem.amount
                })
            }else {
                existingCartItem.amount++;
            }
        },
        removeItem(state, action) {
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            const existingCartItem = state.items[existingCartItemIndex]; 
            state.totalPrice = state.totalPrice - existingCartItem.price;
            if(existingCartItem.amount === 1){
                state.items.pop(existingCartItem);
            }else { 
                existingCartItem.amount--;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;