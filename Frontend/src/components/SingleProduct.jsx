import React, { useState } from 'react'
import { Img, right } from "../assets"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, minusCartVal } from '../store/slice'
import { useNavigate } from "react-router-dom"
import Cart from './Cart'
import Navbar from './Navbar'
// import {addToCart} from "../store"

export const SingleProduct = () => {

    const dispatch = useDispatch()
    const [showCart, setShowCart] = useState(false)
    const [added, setAdded] = useState(false)
    // const navigate = useNavigate() 

    const num = useSelector((state) => state.Cart.cartItems.noOfP)
    console.log(num);
    const addcart = () => {
        dispatch(addToCart({
            value: num + 1
        }))
        setAdded(true)
        setTimeout(() => {
            setAdded(false)
        }, 2000);
    }

    const minusVal = () => {
        dispatch(minusCartVal({
            value: num - 1
        }))
    }
    const toggle = () => {
        setShowCart(false)
        console.log(showCart);
    }
    //
    return (
        <>
            <Navbar />
            <div className="container relative mt-0">
                <div className="top  w-full items-end flex justify-between mx-auto mt-0">
                    <div className="added flex flex-row fixed top-28 ml-2 p-4 w-72 md:w-fit  md:ml-10" style={added ? { display: "flex" } : { display: "none" }}>
                        <p><img className='w-7' src={right} alt="" /></p>
                        <p>"Midi Jade Plant" has been added to your cart!</p>
                    </div>
                    <div className="viewCart absolute top-5 -right-14 md:right-20 ">
                        <button onClick={() => setShowCart(true)} className='bg-green-500 rounded-xl p-2 w-40'>
                            View Cart
                        </button>
                    </div>
                </div>
                {showCart ? <Cart onClick={() => toggle()} /> : " "}
                <div className="main-box  w-fit  mx-auto flex flex-col space-y-5 md:space-y-0 items-center align-middle space-x-0 md:flex-row md:w-fit md:mx-auto md:space-x-40 mt-32 ml-20 md:ml-52">
                    <div className="sale md:block hidden bg-green-600 p-5 rounded-full w-fit text-white fixed md:top-40 top-[10rem] left-10">
                        Sale!
                    </div>
                    <div className="plantimg">
                        <img className='w-80' src={Img} alt="" />
                    </div>
                    <div className="content">
                        <p className='text-2xl font-bold'>Mini Jade Plant</p>
                        <span className='price relative text-xl'> <div className='bg-slate-500 absolute top-3 left-0 h-[0.10rem] w-14'></div>₹299.00 <span className='font-bold'> ₹199.00</span><span className='text-sm text-slate-500 mt-10'> + Free Shipping</span></span>
                        <p className='w-96 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium culpa provident corrupti voluptatibus odio velit, similique non ab officia, distinctio dignissimos labore beatae consequatur cumque pariatur eos corporis aut!</p>
                        <div className="last-box flex flex-row items-center  justify-evenly mt-5 w-full ">
                            <div onClick={minusVal} className="Minus cursor-pointer font-bold text-xl bg-slate-300 px-1">
                                -
                            </div>
                            <div className="cartValue bg-slate-300 px-3">
                                {num}
                            </div>
                            <button onClick={addcart} className='bg-green-500 rounded-xl p-2 w-60'>
                                Add to Cart
                            </button>
                        </div>
                        <div className='bg-slate-500 mt-5 h-[0.10rem] w-full'></div>
                        <div className="categories mt-3">
                            <p className='text-slate-400'>Categories: <span className='text-green-500'>Best Selling product, Plants</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
