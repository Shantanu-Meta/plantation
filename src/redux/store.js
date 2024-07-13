import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Reducers/cart";

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer
    }
}); 

export default store