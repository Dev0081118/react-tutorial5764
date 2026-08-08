import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import {Route , Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Products from './pages/Products'
import Men from './pages/men'
import Women from './pages/women'
import Kids from './pages/kids'
const App = () => {
  return (
    <div className='bg-black text-white h-screen w-screen '>
      <Navbar />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Products' element={<Products />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} /> 
        </Route>
      </Routes>
    </div>
  )
}

export default App
