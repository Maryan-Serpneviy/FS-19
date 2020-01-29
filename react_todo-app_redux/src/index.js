import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
   <Router basename={process.env.PUBLIC_URL}>
      <App />
   </Router>,
   document.querySelector('#root')
)
