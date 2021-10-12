import { useState } from 'react'

import TeamList from './components/TeamList'
import './App.css'

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  return (
    <div className='App'>
      <TeamList teamMembers={teamMembers} />
    </div>
  )
}

export default App
