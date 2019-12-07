import React from 'react'
import './App.css'
import PeopleTable from './components/PeopleTable'
import getPeople from './api/people'

export default function App() {
  return (
    <div className="App">
      <h1>People table</h1>
      <PeopleTable getPeople={getPeople} />
    </div>
  )
}
