import {configureStore} from "@reduxjs/toolkit"
import  Cart  from "./slice"

const store = configureStore({
    reducer: {Cart: Cart}
})

export default store