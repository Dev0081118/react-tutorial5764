import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-cyan-900 text-white h-20 w-full flex items-center justify-between px-8'>
      <div className='text-xl ml-30 font-bold'>My App</div>
      <div className='flex gap-10 mr-30'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Products">Products</Link>
      </div>
    </div>
  )
}

export default Navbar
