import React from 'react'
import Carousel from './components/Carousel'
import './App.scss'

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>React carousel</h1>
                <Carousel />
            </div>
        )
    }
}
