import { useState } from 'react'

import Form from './components/Form'
import TeamMemberList from './components/TeamMemberList'
import './App.css'

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const handleChange = () => {}

  return (
    <div className='App'>
      <Form handleChange={handleChange} />
      <TeamMemberList teamMembers={teamMembers} />
    </div>
  )
}

export default App
