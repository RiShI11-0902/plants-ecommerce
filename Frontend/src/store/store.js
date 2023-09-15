import {configureStore} from "@reduxjs/toolkit"
// import  Cart  from "./slice"
import authReducer from "./slice"
import  productReducer  from "./ProductSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer
    }
    
})

export default store