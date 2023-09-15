import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleProduct } from "./productApi";

export const getSingleProductAsync = createAsyncThunk(
    "product/getSingle",
    async (data) =>{
        const res = getSingleProduct(data)
        return res
    }
)

export const ProductReducer = createSlice({
    name:"product",
    initialState:{
        products: [],
        selectedProduct: null,
        total: 0
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getSingleProductAsync.fulfilled, (state,action)=>{
            state.selectedProduct = action.payload
        })
    }
})

export default ProductReducer.reducer
