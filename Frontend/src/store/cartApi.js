import axios from "axios"

export const addToCart = async (item)=>{
    const data = await axios.post(`http://localhost:8080/cart/addtocart`, item);
    return data.data
}

// export const fetchItemsByUser = async(id) =>{
//     const data = await axios.get(`http://localhost:8080/cart/getcart?id=${id}`)
//     return data.data
// } 

// export const fetchItemsByUser = async(id) =>{
//     const data = await axios.get(`http://localhost:8080/cart/getcart/${id}`)
//     return data.data
// } 