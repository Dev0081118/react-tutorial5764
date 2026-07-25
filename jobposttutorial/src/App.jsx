import React from 'react'
import Card from './components/Card.jsx'
import jobs from './data/jobdata.js'
const App = () => {
  console.log(jobs);
  return (
    <div className="parent">
     {jobs.map((job) => (
        <Card key={job.id} company={job.company} logo={job.logo} posted={job.posted} title={job.title} type={job.type} level={job.level} salary={job.salary} location={job.location} />
      ))}
      
    </div>
  )
}

export default App
