import React from 'react';
import './App.css';

import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import Article from './components/Article/Article';

export default function App() {
  return (
    <>
      <Welcome />
      <Header />
      <Article />
    </>
  );
}
