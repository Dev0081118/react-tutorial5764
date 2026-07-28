import React from 'react'

const App = () => {
  const [name, setName] = React.useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    const Target= e.target[0].value;
      console.log("Form is submitted by " + Target)
      setName('')  
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={name} 
        onChange= {(e) => setName(e.target.value)}  type="text" placeholder="Enter your name" /><br />
      
        <button>Submit</button>

      </form>
    </div>
  )
}

export default App
