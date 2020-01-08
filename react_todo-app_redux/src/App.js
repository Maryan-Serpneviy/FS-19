import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import TodosContainer from './components/TodoList/TodosContainer'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <TodosContainer />
    </Provider>
  )
}
