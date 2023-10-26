import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createItem, logInAdmin } from "./authApi";

export const authAsync = createAsyncThunk(
    "admin/login",
    async (userData)=>{
        try {
            const res = await logInAdmin(userData)
            console.log(res);
            return res
        } catch (error) {
            console.log(error);
        }
    }
)

export const createItemAsync = createAsyncThunk(
    "admin/fetchItems",
    async (item)=>{
        try {
            const data = await createItem(item);
            return data
        } catch (error) {
            console.log(error);
        }
    }
)

export const Reducer = createSlice({
    name: "Admin",
    initialState: {
        loggedIn: null,
        allItems:[]
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(authAsync.fulfilled, (state,action)=>{
            state.loggedIn = action.payload
        })
        builder.addCase(createItemAsync.fulfilled, (state,action)=>{
            state.allItems = action.payload
        })
    }
})

export default Reducer.reducer