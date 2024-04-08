import './App.css'
import { useState, useEffect } from 'react'
import Form from './Form'
import Appointment from './Appointment'
import { fetchAppts } from './apiCalls'

function App() {
  const [appts, setAppts] = useState([])

  // useEffect(() => {
  //   fetchAppts()
  //   .then(data => {
  //     setAppts(...appts, setAppts(data))
  //   })
  // })
  useEffect(() => {
    
  })
  function addAppt(newAppt) {
    setAppts([...appts, newAppt])
  }
  console.log(appts)

  function deleteAppt(id) {
    const removedAppts = appts.filter(appt => appt.id !== id)
    console.log('removed', removedAppts)
    setAppts(removedAppts)
  }

  return (
  <>
    <h1>Vet Appointments</h1>
    {!appts.length && <h2>No Appointments yet!</h2>}
    <Form addAppt={addAppt}/>
    <Appointment appts={appts} deleteAppt={deleteAppt}/>
  </>
  )
}

export default App;

/*
What “aha” moments did you have?
  -Towards the end when deleting the way props are passed down to children components finally made sense.
  To me it kind of mimics OOP and class based systems in how it operates.
Which concepts are the fuzziest for you right now?
  - Conditional rendering using && vs ||
  - How does destructering useState KNOW that the 2nd variable is a function that updates the 1st one?
Which concepts are the clearest for you right now?
What do you know about functional components?
What do you know about hooks?
What do you know about state?
What do you know about passing props?
What questions do you have? (bring these to class on Wednesday)
*/
