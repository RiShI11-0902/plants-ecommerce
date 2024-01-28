import axios from "axios"

export const addToCart = async (item)=>{
    const data = await axios.post(`http://localhost:8080/cart/addtocart`, item);
    return data.data
}

export const updateCart = async (updation)=>{
    const data = await axios.patch(`http://localhost:8080/cart/updatecart/${updation._id} `, updation)
    return data.data
}

export const fetchItemsByUser = async(id) =>{
    const data = await axios.get(`http://localhost:8080/cart/getcart/${id}`)
    return data.data
} 

export const deleteCartProduct = async (id)=>{
    const data = await axios.post(`http://localhost:8080/cart/deleteitem/${id}`)
    return data.data
}

// export const fetchItemsByUser = async(id) =>{
//     const data = await axios.get(`http://localhost:8080/cart/getcart/${id}`)
//     return data.data
// } 