const Card = (props) => {
  console.log(props)
  return (
    <div className='card'>
      <img src="https://images.unsplash.com/photo-1778084708647-9ee26217bb9e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile" />
      <h2>{props.user}</h2>
      <p>{props.paragraph}</p>
      <button className="crdbtn">View Profile</button>
    </div>
  )
}
export default Card