import React, {useState} from 'react'
import './App.css'
import GoodsList from './components/GoodsList/GoodsList'

const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
]

export default function App() {
  const [display, setDisplay] = useState(false)

  function handleStart() {
    setDisplay(true)
  }

  return (
    <div className="App">
      <h1>React sort list</h1>
      {!display && <button id="start" onClick={handleStart}>Start</button>}
      {display && <GoodsList list={goods} />}
    </div>
  )
}
