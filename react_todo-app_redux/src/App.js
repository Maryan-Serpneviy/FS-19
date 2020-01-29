import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import TodosContainer from './components/TodoList/TodosContainer'

const store = configureStore()

export default @withRouter class extends Component {
  render() {
    return (
      <Provider store={store}>
          <Route path='/' component={TodosContainer} />
      </Provider>
    )
  }
}
