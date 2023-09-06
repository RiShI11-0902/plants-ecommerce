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

    const getProducts = async ()=>{
        //http://localhost:8080
        const response = await  axios.get("/api/products/getAllProducts")
        //   const data = response.json()
          console.log(response);
          setData(response);
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