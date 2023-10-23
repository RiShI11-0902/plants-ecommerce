import React from 'react'
import { useForm } from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import { Navigate, useNavigate} from "react-router"
import { authAsync } from '../store/authSlice'
const LoginPage = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const admin = useSelector(state => state.auth.loggedIn)
    console.log(admin);
    return (
        // { admin }
        <div className='w-fit mx-auto mt-5'>
            {admin && <Navigate to={"/home"} replace={true} ></Navigate>}
            <form onSubmit={handleSubmit((data)=>{
                dispatch(authAsync({
                    username: data.username,
                    password: data.password
                }))
            })}>
                <div className=''>
                    <label htmlfor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input {...register("username", {
                        required: "E-mail is Required",
                        pattern: {
                            value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                            message: 'E-mail not valid',
                        },
                    })}
                        type="email" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    {errors.username ? <p className='text-red-800'>{errors.username.message}</p> : " "}
                </div>
                <div>
                                    <label htmlfor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input {...register("password",{
                                        required: " Password is Required",
                                    })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                    { errors.password ? <p className='text-red-800'>{errors.password.message}</p> : " " }
                                    
                                </div>
                                <div className="flex items-center justify-between">
                                    <button type='submit'>
                                        Login
                                    </button>
                                </div>
            </form>
        </div>
    )
}

export default LoginPage