import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart', 
    initialState: [], 
    reducers:{
        addCart: (state, action)=>{
            state.push(action.payload); 
        }, 
        deleteCart: (state, action)=>{
            return state.filter(plant => plant.name !== action.payload.name);
        }
    }
});

export default cartSlice; 
export const cartActions = cartSlice.actions;