import React from 'react'
import './PeopleTable.css'
import Person from './Person'
import NewPerson from './NewPerson'

export default class PeopleTable extends React.Component {
    state = {
        people: [],
        isLoaded: false,
        searchValue: ''
    }
    prev = null

    handleRowSelect = event => {
        if (this.prev) {
            this.prev.classList.remove('Person--selected')
        }
        this.prev = event.target.parentNode
        event.target.parentNode.classList.add('Person--selected')
    }

    search = event => this.setState({ searchValue: event.target.value })

    sort = event => {
        const prop = event.target.innerText
        this.setState(state => {
            if (prop === 'century') {
                return state.people.sort((a, b) => {
                    if (Math.ceil(a["died"] / 100) > Math.ceil(b["died"] / 100)) return 1
                    else if (Math.ceil(a["died"] / 100) < Math.ceil(b["died"] / 100)) return -1
                    return 0
                })
            }
            if (prop === 'age') {
                return state.people.sort((a, b) => {
                    if (a["died"] - a["born"] > b["died"] - b["born"]) return 1
                    else if (a["died"] - a["born"] < b["died"] - b["born"]) return -1
                    return 0
                })
            }
            return state.people.sort((a, b) => {
                if (a[prop] > b[prop]) return 1
                else if (a[prop] < b[prop]) return - 1
                return 0
            })
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    addNewPerson = event => {
        event.preventDefault()
        this.setState(state => {
            state.people.push({
                name: state.name,
                sex: state.sex,
                born: state.born,
                died: state.died,
                mother: state.mother,
                father: state.father
            })
            return state
        })
        this.setState({
            name: '',
            born: '',
            died: '',
            mother: '',
            father: '',
            sex: null
        })
    }

    componentDidMount() {
        this.props.getPeople().then(people => {
            this.setState({ isLoaded: true, people })
        })
    }

    render() {
        const { people } = this.state
        return (
            <div className="App">
                <input
                    value={this.state.searchValue}
                    onChange={this.search}
                    type="text"
                    placeholder="Search by name..."
                />
                <NewPerson
                    addNewPerson={this.addNewPerson}
                    handleChange={this.handleChange}
                    sex={this.state.sex}
                />
                <table className="PeopleTable">
                    <thead>
                        <tr onClick={this.sort}>
                            <th>id</th>
                            <th>name</th>
                            <th>sex</th>
                            <th>born</th>
                            <th>died</th>
                            <th>age</th>
                            <th>century</th>
                            <th>mother</th>
                            <th>father</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.isLoaded && <Person
                            people={people}
                            handleRowSelect={this.handleRowSelect}
                            searchValue={this.state.searchValue}
                        />}
                    </tbody>
                </table>
            </div>
        )
    }
}
