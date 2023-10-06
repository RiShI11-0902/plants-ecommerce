import React, { useEffect, useState } from 'react'
import { Img, close } from "../assets"
import { useDispatch, useSelector } from 'react-redux'
import { fetchItemByUserAsync } from '../store/cartSlice'
import axios from 'axios'
// import { removeFromCart } from '../store/slice'

const Cart = () => {
    const [items, setItems] = useState()
    // const total = useSelector((state) => state.Cart.cartItems.totalPrice)
    // const num = useSelector((state) => state.Cart.cartItems.noOfP)
    // console.log(props.onclick);

    const dispatch = useDispatch()
    // const items = useSelector(state => state.cart.ItemsofSingleId)
    const selectUser = useSelector(state => state.auth.loggedInUser)
    console.log(selectUser.id);
    console.log(items);
    // const remove = () => {
    //     dispatch(removeFromCart({
    //         value: 0
    //     }))
    //     props.onClick()
    // }
    const getcart = async ()=>{
        const res = await axios.get(`http://localhost:8080/cart/getcart/${selectUser.id}`)
        setItems(res.data)
        console.log(items);
    }
    useEffect(() => {
    //   dispatch(fetchItemByUserAsync(selectUser.id))
    getcart()
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
            {
                items?.map((i)=>{
                    return <div className='flex  flex-row  space-x-4 p-5 items-center'>
                     <img src= {i.product.thumbnail} alt="" />  
                     <div>
                     <p className='text-3xl'>{i.product.title}</p>
                     <p className='text-lg mt-2'> Quantity : {i.quantity}</p>
                     <div className='flex mt-2 items-center flex-row h-fit w-full space-x-9  text-3xl'>
                        <div className='bg-red-500 p-3 text-center'> + </div>
                        <div className='bg-red-500 p-3 text-center'> - </div>
                     </div>
                     </div>
                    </div>
                })
            }
        </>
    )
}

export default Cart