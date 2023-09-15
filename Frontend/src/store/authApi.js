import  axios  from "axios"

export const createUser = async (userData)=>{
    const data = axios.post(`http://localhost:8080/auth/register`, userData)
    return data
}

export const loginUser = async (userData)=>{
    try {
        const data = axios.post(`http://localhost:8080/auth/login`, userData)
        if(data.ok){
            const res = await data;
            console.log(res);
            return res;
        }else{
            const error = await data;
            return error
        }
    } catch (error) {
        console.log(error);
    }
    return data
}

export const logoutUser = async ()=>{
    try {
        const logout = axios.get("http://localhost:8080/auth/logout")
        console.log(logout);
    } catch (error) {
        console.log(error);
    }
}