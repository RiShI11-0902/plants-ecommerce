import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <div className='bg-red-500 w-fit p-10 min-h-screen fixed'>
      <h1>Welcome</h1>
      <ul className='mt-10 flex flex-col font-semibold space-y-5'>
        <Link to={"/home"} className='cursor-pointer'>Home</Link>
        <Link to={"/create-product"} className='cursor-pointer'>Create Product</Link>
        <Link to={"/analysis"} className='cursor-pointer'>Analysis</Link>
        <Link to={"/history"} className='cursor-pointer'>History</Link>
        <Link to={"/settings"} className='cursor-pointer'>Settings</Link>
      </ul>
    </div>
  )
}

export default MenuBar