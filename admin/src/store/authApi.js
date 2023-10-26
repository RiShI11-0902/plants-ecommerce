import axios from "axios";
export const logInAdmin = async (userData) => {
  try {
    const data = await axios.post(`http://localhost:8080/auth/login`, userData);
    return data.data;
    // if (data.ok) {
    //     const res = await data
    //     return res
    // }
  } catch (error) {
    console.log(error);
  }
};

export const createItem = async (item)=>{
  try {
    const data = await axios.post("http://localhost:8080/api/products/createProducts", item)
    return data.data
  } catch (error) {
    console.log(error);
  }
}
