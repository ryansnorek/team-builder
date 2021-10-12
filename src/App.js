import React, { useState } from 'react'
import './App.css';
import Form from './components/Form'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const change = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = (e) => {
    // Prevent refresh
    e.preventDefault()
    
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    // Create new array with new team members
    setTeam(team.concat(newTeamMember))
    // Clear after submitting
    setFormValues(initialFormValues)
  }
  return (
    <div className="App">
      <h1>Team Builder Form</h1>
     <Form values={formValues} change={change} submit={submit}/>
     {team.map(teamMember => (
       <>
       <p>{teamMember.name}</p>
       <p>{teamMember.email}</p>
       <p>{teamMember.role}</p>
       </>
     ))}
    </div>
  );
}

export default App;
