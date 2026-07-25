import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'
const App = () => {
  return (
   <div>
     <Navbar />
     <div className="card-container">
       
       <Card user='John Doe' paragraph="hi i am John Doe i love dogs" />
       <Card user='Jane Smith' paragraph="hi i am Jane Smith i love cats" />
       <Card user='Bob Johnson' paragraph="hi i am Bob Johnson i love birds" />
    </div>
     </div> 
    
    
  )
}

export default App
