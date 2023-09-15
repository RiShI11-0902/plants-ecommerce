import axios from "axios"

export const getSingleProduct = async (id)=>{
    const getProduct = await axios.get(`http://localhost:8080/api/products/getProductById/${id}`)
    return getProduct
}