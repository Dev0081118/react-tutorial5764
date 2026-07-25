import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './rightContent'
const Page1Content = () => {
  return (
    <div className='py-10 flex items-center gap-20 justify-between h-[90vh]  px-18 '>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1Content
