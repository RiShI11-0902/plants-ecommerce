import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 p-5">
          {
            data?.map((i) => {
              return <Link to={`/product/${i._id}`}>
                <div className="bg-red-400 w-fit ">
                  <img src={`http://localhost:8080/images/`+i.image} alt="" srcset="" />
                </div>
                <p>{i.title}</p>
                <p>{i.category}</p>
                <p>{i.price}</p>
              </Link>
              // return <Link to={`/product/${i._id}`} >
              //   <div className='p-5 bg-red-700 shadow-slate-200 shadow-xl'>
              //     <div className="   w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
              //       <img src={i.thumbnail} alt="" srcset="" />
              //     </div>
              //     <div className="mt-4 flex justify-between">
              //       <div>
              //         <h3 className="font-extrabold text-lg">
              //           <p aria-hidden="true" className="absolute  inset-0"></p>
              //           {i.title}
              //         </h3>
              //         <p className="mt-1 text-sm text-gray-500">Category: </p>
              //       </div>
              //       <p className="text-sm font-medium text-gray-900"> Price: </p>
              //     </div>
              //   </div>
              //   </Link>
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