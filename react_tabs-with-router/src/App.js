import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Tabs from './components/Tabs/Tabs'

export default function App() {
  return (
    <Router basename="">
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/tabs" component={Tabs} exact />
      </div>
    </Router>
  )
}