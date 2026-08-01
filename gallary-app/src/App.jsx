import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import Card from './components/Card'
import axios from 'axios'
import Buttons from "./components/buttons" 
const App = () => {
  const [index, setIndex] = useState(1)
  const [userData, setUserData] = useState([])
  const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(res.data)
   
    
  }
  useEffect(() => {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if (userData.length>0) {
    printUserData = userData.map((elem, idx) => {
      return <Card elem={elem} key={idx} />
    }
  )
  }
  return (
    
    <div className='h-screen overflow-auto text-white p-10  bg-[#000000]'>
      <div className='flex flex-wrap h-[80%] gap-5'>{printUserData}</div>

      <Buttons index={index}  setIndex={setIndex} setUserData={setUserData} />
    </div>

  )
}

export default App
