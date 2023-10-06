import { createAsyncThunk,  createSlice } from "@reduxjs/toolkit";
import { addToCart, fetchItemsByUser } from "./cartApi";

export const addtoCartAsync = createAsyncThunk(
    "cart/addtocart",
    async (item)=>{
        const data = await addToCart(item);
        return data
    }
)

// export const fetchItemByUserAsync = createAsyncThunk(
//     "cart/fetchcart",
//     async (id) =>{
//         const data = await fetchItemsByUser(id);
//         return data
//     }
// )

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
        // builder.addCase(fetchItemByUserAsync.fulfilled,(state,action)=>{
        //     state.ItemsofSingleId.push(...action.payload)
        // })
    }
})

export default CartReducer.reducer