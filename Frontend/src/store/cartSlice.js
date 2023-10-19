import { createAsyncThunk,  createSlice } from "@reduxjs/toolkit";
import { addToCart, updateCart, fetchItemsByUser, deleteCartProduct } from "./cartApi";

export const addtoCartAsync = createAsyncThunk(
    "cart/addtocart",
    async (item)=>{
        const data = await addToCart(item);
        return data
    }
)

export const updateCartAsync = createAsyncThunk(
    "cart/updateCart",
    async (item)=>{
        const data = await updateCart(item)
        return data
    }
)

export const fetchItemByUserAsync = createAsyncThunk(
    "cart/fetchcart",
    async (id) =>{
        const data = await fetchItemsByUser(id);
        return data
    }
)

export const deleteCartProductAsync = createAsyncThunk(
    "cart/deleteProduct",
    async (id)=>{
        const data = await deleteCartProduct(id);
        return data
    }
)

export const CartReducer = createSlice({
    name: "Cart",
    initialState:{
        Items:[],
        ItemsofSingleId:[],
        cartLoad: false
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(addtoCartAsync.fulfilled, (state,action)=>{
            state.Items.push(action.payload);
        })
        builder.addCase(fetchItemByUserAsync.fulfilled,(state,action)=>{
            state.Items = action.payload
        })
        builder.addCase(updateCartAsync.fulfilled,(state,action)=>{
          const index = state.Items.findIndex(item=> item.id === action.payload.id)
            state.Items[index] = action.payload
        })
        builder.addCase(deleteCartProductAsync.fulfilled,(state,action)=>{
            const index = state.Items.map((i)=> i._id === action.payload._id)
            state.Items.splice(index,1)
        })
    }
})

export default CartReducer.reducer