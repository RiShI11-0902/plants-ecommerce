import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, loginUser } from "./authApi";

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await createUser(userData);
    return response.data;
  }
);

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    try {
      const response = await loginUser(userData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const AuthReducer = createSlice({
  name: "User",
  initialState: {
    loggedInUser: null,
    userChecked: false,
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.loggedInUser = action.payload;
    })
    .addCase(loginUserAsync.fulfilled, (state, action)=>{
      state.status = 'idle',
      state.loggedInUser = action.payload
    })
  },
});

export const { addToCart, removeFromCart, minusCartVal } = AuthReducer.actions;
export default AuthReducer.reducer;
