import React from 'react'
import axios from 'axios'
const Card = (props) => {
    console.log(props.elem)
    
  return (
    
    <div>
      <div key ={props.elem.key}>
        <a href={props.elem.url} target="_blank">
            <div className='h-55 w-65 overflow-hidden bg-white rounded-xl'>
              <img src={props.elem.download_url} alt={props.elem.author} className='w-full h-full object-cover ' />
            </div>
            <h1 className='text-2xl mt-2'>{props.elem.author}</h1>
          
        </a>
      </div>
    </div>  
  )
}

export default Card
