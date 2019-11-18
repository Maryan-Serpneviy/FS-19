import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
  constructor()  {
    super()

    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decremenet = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  double = () => {
    this.setState({
      count: this.state.count * 2
    })
  }

  halve = () => {
    this.setState({
      count: this.state.count / 2
    })
  }

  pow = () => {
    this.setState({
      count: this.state.count ** 2
    })
  }

  sqrt = () => {
    this.setState({
      count: Math.sqrt(this.state.count)
    })
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className="counter">
        <div className="counter__times">{this.state.count}</div>        
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decremenet}>Decrement</button>
        <br />
        <button onClick={this.double}>Double</button>
        <button onClick={this.halve}>Halve</button>
        <br />
        <button onClick={this.pow}>Pow</button>
        <button onClick={this.sqrt}>Sqrt</button>
        <br />
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
