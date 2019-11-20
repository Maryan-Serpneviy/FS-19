import React from 'react'
import './GoodsList.css'

export default class GoodsList extends React.Component {
    state = {
        sourceList: [...this.props.list],
        list: [...this.props.list],
        selected: null
    }
    
    handleReverse = () => {
        this.setState(prev => {
            return prev.list.reverse()
        })
    }

    sortByAlphabet = () => {
        this.setState(prev => {
            return prev.list.sort()
        })
    }

    sortByLength = () => {
        this.setState(prev => {
            return prev.list.sort((a, b) => b.length - a.length)
        })
    }

    handleReset = () => {
        this.setState({
            list: [...this.state.sourceList]
        })
        document.querySelector('select').value = 1
    }

    handleSelect = e => {
        const filtered = this.state.sourceList.filter(li => li.length >= e.target.value)
        this.setState({
            list: filtered
        })
    }

    render() {
        const selectOptions = []
        for (let i = 1; i <= 10; i++) {
            selectOptions.push(i)
        }

        return (
            <div className="goods-list">
                <ul className="goods-list__list">
                    {this.state.list.map(li => (
                        <li className="goods-list__list-item" key={li}>{li}</li>
                    ))}
                </ul>
                <button onClick={this.handleReverse}>Reverse</button>
                <button onClick={this.sortByAlphabet}>Sort alphabet</button>
                <button onClick={this.sortByLength}>Sort by length</button>
                <button onClick={this.handleReset}>Reset</button>
                <br />
                <select onChange={this.handleSelect}>
                    {selectOptions.map(option => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            </div>
        )
    }
}