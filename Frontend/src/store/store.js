import {configureStore} from "@reduxjs/toolkit"
// import  Cart  from "./slice"
import authReducer from "./slice"
import  productReducer  from "./ProductSlice"
import  CartReducer  from "./cartSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        cart: CartReducer
    }
    
})

export default store