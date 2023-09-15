import React from 'react'
import { Img, close } from "../assets"
import { useDispatch, useSelector } from 'react-redux'
// import { removeFromCart } from '../store/slice'

const Cart = (props) => {
    // const total = useSelector((state) => state.Cart.cartItems.totalPrice)
    // const num = useSelector((state) => state.Cart.cartItems.noOfP)
    console.log(props.onclick);

    const dispatch = useDispatch()

    // const remove = () => {
    //     dispatch(removeFromCart({
    //         value: 0
    //     }))
    //     props.onClick()
    // }

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
        </>
    )
}

export default Cart