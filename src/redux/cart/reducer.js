import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemsIncart:[]
    },
    reducers:{
        setItemInCart:(state,action) => {
            state.itemsIncart.push(action.payload)
        },
    }
});
export const {setItemInCart} = cartSlice.actions;
export default cartSlice.reducer;