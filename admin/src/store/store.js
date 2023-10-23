import {configureStore} from "@reduxjs/toolkit"
import  Reducer  from "./authSlice"

const store = configureStore({
    reducer: {auth: Reducer}
})

export default store