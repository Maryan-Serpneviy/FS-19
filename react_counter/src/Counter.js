import React, {useState} from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decremenet = () => {
    setCount(prevCount => prevCount - 1)
  }

  const double = () => {
    setCount(prevCount => prevCount * 2)
  }

  const halve = () => {
    setCount(prevCount => prevCount / 2)
  }

  const pow = () => {
    setCount(prevCount => prevCount ** 2)
  }

  const sqrt = () => {
    setCount(prevCount => Math.sqrt(prevCount))
  }

  const reset = () => {
    setCount(prevCount => prevCount = 0)
  }

  return (
    <div className="counter">
      <div className="counter__times">{count}</div>        
      <button onClick={increment}>Increment</button>
      <button onClick={decremenet}>Decrement</button>
      <br />
      <button onClick={double}>Double</button>
      <button onClick={halve}>Halve</button>
      <br />
      <button onClick={pow}>Pow</button>
      <button onClick={sqrt}>Sqrt</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}
