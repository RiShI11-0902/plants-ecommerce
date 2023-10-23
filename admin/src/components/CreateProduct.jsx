import React from 'react'
import MenuBar from './MenuBar'

const CreateProduct = () => {
  return (
    <>
                <MenuBar/>

    <div className='flex items-center justify-center h-screen p-10 '>
      <form action="" className='flex flex-col space-y-5'>
       <input className='w-80 p-2' id='title' type="text" name='title' placeholder='title' />
       <input className='w-80 p-2' type="text" name="description" id="" />
       <input className='w-80 p-2' type="text" name="price" id="" />
       <input className='w-80 p-2' type="text" name="discountPercentage" id="" />
       <input className='w-80 p-2' type="text" name="rating" id="" />
       <input className='w-80 p-2' type="text" name="size" id="" />
       <input className='w-80 p-2' type="text" name="category" id="" />
       <input className='w-80 p-2' type="text" name="thumbnail" id="" />
       <input className='w-80 p-2' type="text" name="images" id="" />
      </form>

    </div>
    </>
  )
}

export default CreateProduct