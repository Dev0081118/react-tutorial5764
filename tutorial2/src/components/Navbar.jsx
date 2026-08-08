import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-[#828484] text-white h-20 w-full flex items-center justify-between px-8'>
      <div className='text-xl font-bold'>My App</div>
      <div className='flex space-x-4'>
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact' >Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
