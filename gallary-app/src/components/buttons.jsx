import React from 'react'

const Buttons = (props) => {
  return (
    <div key={props.index}>
      <div className='flex justify-center items-center gap-5 mt-10'>
        <button 
        onClick={() => { if(props.index>1){props.setIndex(props.index -1)
             props.setUserData([])
        }
         
      }}
        className='bg-green-600 rounded-xl text-2xl cursor-pointer active:scale-95 text-black px-4 py-2 font-semibold'>prev</button>
        <h4>page {props.index}</h4>
        <button 
        onClick={() => {

         props.setIndex(props.index + 1)
         props.setUserData([]) 
         
        }
        }
        className='bg-green-600 rounded-xl text-2xl cursor-pointer active:scale-95 text-black px-4 py-2 font-semibold'>next</button>
      </div>
    </div>
  )
}

export default Buttons
