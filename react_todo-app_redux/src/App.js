import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Store from './Store'
import TodosContainer from './components/TodoList/TodosContainer'

export const store = createStore(Store.reducer)

export default function App() {
  return (
    <Provider store={store}>
      <TodosContainer />
    </Provider>
  )
}
