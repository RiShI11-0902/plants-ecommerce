import React from 'react'
import MenuBar from './MenuBar'
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux"
import { createItemAsync } from '../store/authSlice'
const CreateProduct = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const dispatch = useDispatch();

  return (
    <>
      <MenuBar />

      <div className='flex items-center justify-center h-screen p-10 '>
        <form onSubmit={handleSubmit((data)=>{
          console.log(data);
          dispatch(createItemAsync(data))
        })} action="" className='flex flex-col space-y-5'>
          <input {...register("title",{
            required: " Title is Required"
          })} className='w-80 p-2 px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500' id='title' type="text" name='title' placeholder='title' />

          <input {...register("description",{
            required: " description is Required"
          })}  className='w-80 p-2 px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500' type="text" name="description" id="" placeholder='description' />

          <input {...register("price",{
            required: " price is Required"
          })}  className='w-80 p-2 px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500' type="text" name="price" id="" placeholder='price' />

          <input {...register("discountPercentage",{
            required: " discountPercentage is Required"
          })}  className='w-80 p-2 px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500' type="text" name="discountPercentage" id="" placeholder='discountPercentage' />

          <input {...register("rating",{
            required: " rating is Required"
          })}  className='w-80 p-2 px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500' type="text" name="rating" id="" placeholder='rating' />

          <input {...register("size",{
            required: " size is Required"
          })}  className='w-80 p-2 px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500' type="text" name="size" id="" placeholder='size' />

          <input {...register("category",{
            required: " category is Required"
          })}  className='w-80 p-2 px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500' type="text" name="category" id="" placeholder='category' />
          <input type="file" name="" placeholder='Image' id="" />
          <input {...register("thumbnail",{
            required: " thumbnail is Required"
          })}  className='w-80 p-2 px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500' type="text" name="thumbnail" id="" placeholder='thumbnail' />
       {/* <input className='w-80 p-2 px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500' type="text" name="images" id="" /> */}
       <button type='submit'>Create</button>
        </form>

      </div>
    </>
  )
}

export default CreateProduct