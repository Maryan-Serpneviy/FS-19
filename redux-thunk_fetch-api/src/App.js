import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import Store from './Store'
import ArticleContainer from './ArticleContainer'

const store = createStore(
  Store.reducer,
  applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
      <ArticleContainer buttonLabel="Request" />
    </Provider>
  );
}

export default App;
