import { useState } from 'react'

import Form from './components/Form'
import TeamMemberList from './components/TeamMemberList'
import './App.css'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errorText, setErrorText] = useState('')

  const updateForm = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email,
      role: formValues.role,
    }

    if (!newMember.name || !newMember.email || !newMember.role) {
      setErrorText(() => 'You need to enter a valid input for each field.')
      return
    }

    setTeamMembers((prev) => [newMember, ...prev])
    setFormValues(() => initialFormValues)
    setErrorText(() => '')
  }

  return (
    <div className='App'>
      <h1>Team Members</h1>

      <Form values={formValues} update={updateForm} submit={submitForm} error={errorText} />
      <TeamMemberList teamMembers={teamMembers} />
    </div>
  )
}

export default App
