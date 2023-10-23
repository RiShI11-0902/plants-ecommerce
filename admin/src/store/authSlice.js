import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInAdmin } from "./authApi";

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

export const Reducer = createSlice({
    name: "Admin",
    initialState: {
        loggedIn: null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(authAsync.fulfilled, (state,action)=>{
            state.loggedIn = action.payload
        })
    }
})

export default Reducer.reducer