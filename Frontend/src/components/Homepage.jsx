import React from 'react'
import Navbar from "./Navbar"
import { Img, im2, im3 } from '../assets'
const Homepage = () => {
  return (


    <>
    
      <Navbar />
      <div className="container">
       
        <div className="mai-head flex items-center w-fit mx-auto mt-20 space-x-20">
        <img className='w-60 absolute -rotate-45 -top-4 -left-7' src={im3} alt="" />
          <div className="left ">
            <div className="heading text-5xl text-green-900">
              Perfect Plant to Decor is Here
            </div>
            <div className="buttons mt-10 flex w-full justify-evenly font-semibold ">
              {/* <button className='bg-green-500 p-2.5 px-5 rounded-full'>BUY PLANTS</button> */}
            </div>
                  <img className='w-40 absolute bottom-0 left-0' src={im2} alt="" />
          </div>
          <div className="right before:bg-green-300 before:absolute before:top-0 before:right-0  before:w-[50%] before:h-[90%] before:rounded-3xl before:-z-10 before:bg-opacity-20">
            <img className='' src={Img} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Homepage