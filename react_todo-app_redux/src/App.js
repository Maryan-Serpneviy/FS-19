import React from 'react'
import TodosContainer from './components/TodoList/TodosContainer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Store from './Store'

const store = createStore(Store.reducer)

export default function App() {
  return (
    <Provider store={store}>
      <TodosContainer />
    </Provider>
  )
}
