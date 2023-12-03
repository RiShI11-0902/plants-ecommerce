import React, { useState } from 'react'
import FormData from "form-data"
import MenuBar from './MenuBar'
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { createItemAsync } from '../store/authSlice'
import axios from 'axios'
const CreateProduct = () => {

  const [file, setFile] = useState()

  const dispatch = useDispatch()

  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [price, setPrice] = useState()
  const [rating, setRating] = useState()
  const [discount, setDiscount] = useState()
  const [size, setSize] = useState()
  const [Category, setCategory] = useState()





  const upload = async (e) => {
    console.log(title);
    e.preventDefault()
    let formdata = new FormData()
    formdata.append("title", title)
    formdata.append("price", price)
    formdata.append("description", desc)
    formdata.append("rating", rating)
    formdata.append("category", Category)
    formdata.append("size", size)
    formdata.append("discount", discount)
    formdata.append("file", file)
    console.log(...formdata);

    dispatch(createItemAsync(formdata))
    
    // await axios.post("http://localhost:8080/api/products/createProducts", formdata, {
    //   headers: { 'Content-Type': 'multipart/form-data' }
    // }).then((res) => {
    //   console.log("sucesss" + res);
    // })
  }


  // filename={file}
  return (
    <>
      <MenuBar />

      <form className='w-fit mx-auto' >
        <div className='flex space-x-10  flex-row  p-10'>

          <div className="left  flex flex-col space-y-8">
            <input className="w-80 p-2 outline-blue-700 shadow-2xl shadow-blue-300" type="text" placeholder='title' name="title" onChange={(e) => setTitle(e.target.value)} id="" />
            <input className="w-80 p-2 outline-blue-700 shadow-2xl shadow-blue-300" type="text" placeholder='price' name="price" onChange={(e) => setPrice(e.target.value)} id="" />
            <input className="w-80 p-2 outline-blue-700 shadow-2xl shadow-blue-300" type="text" placeholder='discount' name="discount" onChange={(e) => setDiscount(e.target.value)} id="" />
            <input className="w-80 p-2 outline-blue-700 shadow-2xl shadow-blue-300" type="text" placeholder='category' name="category" onChange={(e) => setCategory(e.target.value)} id="" />
          </div>
          <div className="right  flex flex-col space-y-8">
            <input className="w-80 p-2 outline-blue-700 shadow-2xl shadow-blue-300" type="text" placeholder='rating' name="rating" onChange={(e) => setRating(e.target.value)} id="" />
            <input className="w-80 p-2 outline-blue-700 shadow-2xl shadow-blue-300" type="text" placeholder='size' name="size" onChange={(e) => setSize(e.target.value)} id="" />
            <input className="w-80 p-2 outline-blue-700 shadow-2xl shadow-blue-300" type="text" placeholder='description' name="description" onChange={(e) => setDesc(e.target.value)} id="" />
            <input className="w-80 p-2 outline-blue-700 shadow-2xl shadow-blue-300" type="file" placeholder='Upload image' name='file' onChange={(e) => setFile(e.target.files[0])} />
          </div>
        </div>
            <input className="w-20 mx-auto border-blue-950 border rounded-3xl p-3.5 cursor-pointer outline-green-700 shadow-2xl shadow-blue-300" type="submit" onClick={upload} value="CREATE" />

      </form>


    </>
  )
}

export default CreateProduct