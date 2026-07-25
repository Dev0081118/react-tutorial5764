import React from 'react'
import {ArrowUpRight} from 'lucide-react'
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-[40%]'>
      <div className='p-4'>
        <h3 className='text-6xl mb-7 font-bold'>Prospective <br /> <span>customer </span><br />      segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div >
        <ArrowUpRight size={80} />
      </div>
    </div>
  )
}

export default LeftContent
