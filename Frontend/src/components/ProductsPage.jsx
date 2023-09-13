import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Navbar from './Navbar';
import axios from 'axios';

const ProductsPage = () => {
  // const location = useLocation()

  // console.log(location.state.products);
  const [data, setData] = useState()
  // //  setData() 
  //  const data = location.state.products

  // const [data, setData] = useState("")

  const getProducts = async () => {
    //http://localhost:8080
    const response = await axios.get("http://localhost:8080/api/products/getAllProducts")
    //   const data = response.json()
    console.log(response);
    setData(response.data);
  }

  useEffect(() => {
    getProducts()
    //   console.log();
    //   fetch("")
    //   .then((response)=> response.json())
    //   .then((data)=> setData(data))
  }, [])

  return (
    <>
      <Navbar />
      <div className="mt-20 ">
        <div className="group relative grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {
            data?.map((i) => {
              return <div className='p-5 cursor-pointer shadow-slate-200 shadow-xl'>
                <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                  <img src={i.thumbnail} alt="" srcset="" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="font-extrabold text-lg">

                      <p aria-hidden="true" className="absolute  inset-0"></p>
                      {i.title}

                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Category: {i.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900"> Price: {i.price}</p>
                </div>
              </div>
            })
          }

        </div>

      </div>
    </>
  )
}

export default ProductsPage

{/* <div className='mt-20'>
          {
           
          } */}
        //   // data?.map((i) => {
        //     return <div>
        //     {i.title}
        //   </div>
        // })