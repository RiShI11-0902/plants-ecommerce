import React, { useEffect, useState } from 'react'
import { Img, right } from "../assets"
import { useDispatch, useSelector } from "react-redux"
// import { addToCart, minusCartVal } from '../store/slice'
import { useNavigate, useParams } from "react-router-dom"
import Cart from './Cart'
import Navbar from './Navbar'
import axios from 'axios'
import { getSingleProductAsync } from '../store/ProductSlice'
import { addtoCartAsync } from '../store/cartSlice'
// import {addToCart} from "../store"

export const SingleProduct = () => {

    // const dispatch = useDispatch()
    // const [showCart, setShowCart] = useState(false)
    // const [added, setAdded] = useState(false)
    // // const navigate = useNavigate() 

    // const num = useSelector((state) => state.Cart.cartItems.noOfP)
    // console.log(num);
    // const addcart = () => {
    //     dispatch(addToCart({
    //         value: num + 1
    //     }))
    //     setAdded(true)
    //     setTimeout(() => {
    //         setAdded(false)
    //     }, 2000);
    // }

    // const minusVal = () => {
    //     dispatch(minusCartVal({
    //         value: num - 1
    //     }))
    // }
    // const toggle = () => {
    //     setShowCart(false)
    //     console.log(showCart);
    // }
    //
    const params = useParams()
    const dispatch = useDispatch()
    const pid = params.id
    const product = useSelector(state => state.product.selectedProduct)
    const user = useSelector(state => state.auth.loggedInUser)
    console.log(product?.data);
    useEffect(() => {
        dispatch(getSingleProductAsync(pid))
    }, [dispatch, pid])

    const addtoCart = (e) => {
        // e.preventDefault();
        const newItem = {

        }
        console.log(newItem);
        dispatch(addtoCartAsync({
            quantity: 1,
            product: product.data._id,
            user: user.id
        }))
        console.log(newItem);
    }

    return (
        <>
            <Navbar />
            <div className='flex flex-row w-fit mx-auto mt-20 p-5 space-x-20'>
                <div className='w-80'>
                    <img src={`http://localhost:8080/images/`+product?.data?.image} alt="" />
                </div>
                <div>
                    <p>{product?.data?.title}</p>
                    <p>{product?.data?.category}</p>
                    <p>{product?.data?.price}</p>
                    <p>{product?.data?.rating}</p>
                    <p>{product?.data?.size}</p>
                    <button className='p-2 bg-emerald-700' onClick={() => addtoCart({ ...product })} >Add to Cart</button>
                </div>
            </div>
        </>
    )
}
