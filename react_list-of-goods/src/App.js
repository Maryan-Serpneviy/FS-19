import React from 'react'
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

export default class App extends React.Component {
  state = {
    display: false
  }

  handleStart = () => {
    this.setState({
      display: !this.state.display
    })
  }

  componentDidUpdate() {
    document.querySelector('#start').remove()
  }

  render() {
    return (
      <div className="App">
        <h1>React sort list</h1>
        <button id="start" onClick={this.handleStart}>Start</button>
        {this.state.display && <GoodsList list={goods} />}
      </div>
    )
  }
}
