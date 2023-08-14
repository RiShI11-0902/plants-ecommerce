import { createSlice } from "@reduxjs/toolkit";

export const dataReducer = createSlice({
    name:"Cart",
    initialState: {cartItems:{
      pName:"Midi Jade Plant",
      noOfP:0,
      totalPrice:0
    }},
    reducers:{
      addToCart(state,action){
        state.cartItems.noOfP = action.payload.value
      },
      removeFromCart(state,action){
        state.cartItems.noOfP = action.payload.value
        state.cartItems.totalPrice = action.payload.value
      },
      minusCartVal(state,action){
        state.cartItems.noOfP = action.payload.value
      }
    }
})

export const {addToCart, removeFromCart, minusCartVal} = dataReducer.actions
export default dataReducer.reducer 