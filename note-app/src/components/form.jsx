import React from 'react'

const Form = ({ addNote }) => {
  const [note, setNote] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addNote({
            id: Date.now(),
            note,
            description
        });

        setNote("");
        setDescription("");
    };
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex justify-between items-start p-10'>

        <div className=' flex gap-4 w-1/2 items-start flex-col'>
              <label htmlFor="note" className='font-medium text-2xl'> Note: </label>

              <input value={note} onChange={(e) => setNote(e.target.value)} type="text"  id="note" placeholder="Enter note..." className=' text-2xl font-medium border-white border-2 p-4 bg-black w-full rounded-[5px] ' />

              <label htmlFor="description" className='font-medium text-2xl'> Description: </label>

              <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description"  placeholder="Enter description..." className=' border-white border-2 h-32 p-4 bg-black text-2xl font-medium w-full rounded-[5px] '></textarea>

              <button className='bg-white w-full rounded-[5px] font-medium text-2xl text-black p-4'>Submit</button>
        </div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" className='h-100 w-[35%] pl-8 rotate-y-180' />
      </form>

    </div>
  )
}

export default Form 
