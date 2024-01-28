import React, { useEffect, useState } from 'react'
import { Img, close } from "../assets"
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartProductAsync, fetchItemByUserAsync } from '../store/cartSlice'
import axios from 'axios'
import { updateCartAsync } from '../store/cartSlice'
import Navbar from "./Navbar"
// import { removeFromCart } from '../store/slice'

const Cart = () => {
    // const [items, setItems] = useState()
    // const total = useSelector((state) => state.Cart.cartItems.totalPrice)
    // const num = useSelector((state) => state.Cart.cartItems.noOfP)
    // console.log(props.onclick);

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.Items)
    const selectUser = useSelector(state => state.auth.loggedInUser)
    const totalPrice = items?.map((i) => {
        return i?.product?.price * i?.quantity
    })?.reduce((acc, itr) => { return acc + itr }, 0)
    console.log(selectUser.id);
    const getcart = async () => {
        const res = await axios.get(`http://localhost:8080/cart/getcart/${selectUser.id}`)
        setItems(res.data)
        console.log(items);
    }
    const deleteHandle = (id) => {
        dispatch(deleteCartProductAsync(id))
        console.log(id);
    }
    const updateCart = (e,id)=>{
        console.log(e);
        console.log(id);
        dispatch(updateCartAsync({_id: id, quantity: +e.target.value, user: selectUser.id}))
        console.log(items);
        console.log(totalPrice);
    }
    useEffect(() => {
        dispatch(fetchItemByUserAsync(selectUser.id))
        // getcart()
    }, [])

    return (
        <>
            {/* <div className="cartBox absolute top-10 left-[32rem] my-auto w-fit p-10 mx-auto  bg-black bg-opacity-75">
                <img src={close} onClick={props.onClick} className='w-5 cursor-pointer' alt="" />
                {
                    num === 0 ? <div><p className='text-2xl text-white p-5'>Cart is Empty</p></div>  : <div className="div mt-4 flex space-x-10 w-fit align-middle items-center mx-auto">
                    <div className="img">
                        <img className='w-40' src={Img} alt="" />
                    </div>
                    <div className="content text-white">
                        <p className='text-xl'>Mini Jade Plant</p>
                        <div className="total">
                            <p>Total: </p> <span>199.00 X {num}</span>   <p className='font-bold text-xl'>₹{199 * num}</p>
                        </div>
                        <button onClick={remove} className='bg-green-500 rounded-xl p-2  mt-2'>
                            Remove from Cart
                        </button>
                    </div>
                </div>
                }
                
            
            </div> */}

            <Navbar />

            <div className='p-10'>
                {totalPrice ? <p className='font-extrabold'> Total Amount : {totalPrice}</p> : " "}

            </div>
            {

              items.length != 0 ?
                items?.map((i) => {
                    return <div>

                        <div className='flex  flex-row  space-x-4 p-5 items-center'>
                            <img className='w-40' src={`http://localhost:8080/images/` + i?.product?.image} alt="" />
                            <div>
                                <p className='text-3xl'>{i?.product?.title}</p>
                               
                                    <div className='flex space-x-5 items-center'>
                                        <p className='text-lg mt-2'> Quantity : {i?.quantity}</p>
                                        <input onClick={ (e) => updateCart(e,i?._id)} readOnly value="+1" placeholder='+1' className='text-xs font-semibold bg-green-400 w-7 cursor-pointer rounded-3xl py-1 pb-2 px-2 h-5' />
                                        <input onClick={(e)=> updateCart(e,i?._id)} readOnly value="-1" placeholder='-1' className='text-xs font-semibold bg-green-400 w-7 cursor-pointer rounded-3xl py-1 pb-2 px-2 h-5 ' />
                                    </div>
                                <p className='text-lg mt-2'>Price: {i?.product?.price}</p>
                                <div>
                                    <button onClick={() => deleteHandle(i?._id)} className='font-semibold bg-red-500 text-black text-sm p-2 mt-5'>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>

                }) :
                <div>
                    <p>Cart is Empty</p>
                </div>
            }
        </>
    )
}

export default Cart