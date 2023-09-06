import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { createUserAsync } from '../store/slice';

const Registration = () => {
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm()

    const [form, setForm] = useState({});
    const dispatch = useDispatch(); 

    const selectUser = useSelector(state => state.auth.loggedInUser)
    console.log(selectUser);

    const handleinput = (e) => {
        console.log(form);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    // const handleForm = async (e) => {
    //     e.preventDefault();
    //     //http://localhost:8080
    //     const data = await axios.post("/auth/register", form)
    //     console.log(data);

    //     // const response = await fetch('/registration', {
    //     //     method: 'POST',
    //     //     body: JSON.stringify(form),
    //     //     headers: {
    //     //         'Content-Type': "application/json"
    //     //     }
    //     // })
    //     // const data = await response.json()
    //     // console.log(data);
    //     // console.log(response);

    // }

    return (
        <div>
            { selectUser && <Navigate to={"/"} replace={true} ></Navigate>  }
            <section className="bg-gray-50 dark:bg-gray-900">

                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        PLANT COM
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register your account
                            </h1>
                            <form onSubmit={handleSubmit((data) => {
                                dispatch(createUserAsync({
                                    username: data.username,
                                     name: data.name,
                                     password: data.password
                                }))
                                console.log(data);
                            })} className="space-y-4 md:space-y-6" action="#" noValidate>
                                <div>
                                    <label htmlfor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input {...register("username",{
                                        required: "E-mail is Required",
                                        pattern:{
                                            value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                            message: 'E-mail not valid',
                                          },
                                    })} type="email" name="username" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                     { errors.username ? <p className='text-red-800'>{errors.username.message}</p> : " " }
                                </div>
                                <div>
                                    <label htmlfor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input  {...register("name",{
                                        required: " Name is Required",
                                    })}  type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="My Name"  />
                                    { errors.name ? <p className='text-red-800'>{errors.name.message}</p> : " " }
                                </div>

                                <div>
                                    <label htmlfor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input {...register("password",{
                                        required: " Password is Required",
                                    })}  type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                    { errors.password ? <p className='text-red-800'>{errors.password.message}</p> : " " }
                                </div>
                                <div className="flex items-center justify-between">
                                    <button type='submit'>
                                        Register
                                    </button>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    "Have an account "    <span onClick={() => navigate("/login")} className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"> Sign in </span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Registration