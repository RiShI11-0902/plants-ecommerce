import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Navbar from './Navbar';

const ProductsPage = () => {
    // const location = useLocation()

    // console.log(location.state.products);
    // // const [data, setData] = useState()
    // //  setData() 
    //  const data = location.state.products

    const [data, setData] = useState("")

    useEffect(() => {
      fetch("/api/products/getAllProducts")
      .then((response)=> response.json())
      .then((data)=> setData(data))
    }, [])
    
  return (
    <>
        <Navbar />
     <div className='mt-20'>
        {
            data?.map((i)=>{
                return <div>
                    {i.title}
                </div>
            })
        }
        </div>
    </>
  )
}

export default ProductsPage