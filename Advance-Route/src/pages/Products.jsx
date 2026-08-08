import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import men from './men'
import women from './women'
import kids from './kids'
const Products = () => {
  return (
    <div >
      <div className="flex justify-center text-xl gap-10 mt-10">
        <Link to='/Products/men'>Men</Link>
        <Link to='/Products/women'>Women</Link>
        <Link to='/Products/kids'>Kids</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Products
