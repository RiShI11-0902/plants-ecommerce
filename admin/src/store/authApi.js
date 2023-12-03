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

    await axios.post("http://localhost:8080/api/products/createProducts", item, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then((res) => {
      console.log("sucesss" + res);
    })

  } catch (error) {
    console.log(error);
  }
}
