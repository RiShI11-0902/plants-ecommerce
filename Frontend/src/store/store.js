import {configureStore} from "@reduxjs/toolkit"
// import  Cart  from "./slice"
import authReducer from "./slice"

const store = configureStore({
    reducer: {auth: authReducer}
})

export default store