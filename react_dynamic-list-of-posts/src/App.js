import React from 'react'
import './App.css'
import PostList from './components/PostList'

export default function App() {
  return (
    <div className="App">
      <h1>Dynamic list of posts</h1>
      <PostList />
    </div>
  )
}