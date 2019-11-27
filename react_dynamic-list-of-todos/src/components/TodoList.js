import React from 'react'
import TodoItem from './TodoItem'
import getTodos from '../api/todos'

export default class TodoList extends React.Component {
    state = {
        requested: false,
        loaded: false,
        todos: null
    }

    download = () => {
        this.setState({
            requested: !this.state.requested,
            error: false
        })

        getTodos()
            .then(todos => {
                this.setState({ loaded: true, todos })
            })
    }

    sortByProperty = prop => {
        return function(a, b) {
            if (a[prop] > b[prop]) return 1
            else if (a[prop] < b[prop]) return -1
            return 0
        }
    }

    sortByTitle = () => {
        this.setState(prev => {
            return prev.todos.sort(this.sortByProperty('title'))
        })
    }

    sortByUser = () => {
        this.setState(prev => {
            return prev.todos.sort(this.sortByProperty('userId'))
        })
    }

    sortByStatus = () => {
        this.setState(prev => {
            return prev.todos.sort(this.sortByProperty('completed'))
        })
    }

    render() {
        const { requested, loaded, todos } = this.state

        if (!requested) {
            return (
                <>
                    <h1>Dynamic list of todos</h1>
                    <button onClick={this.download}>Fetch</button>
                </>
            )
        } else if (loaded) {
            return (
                <>
                    <h1>Dynamic list of todos</h1>
                    <button onClick={() => {window.location.reload()}}>Reload</button>
                    <h2>Sort by:</h2>
                    <button onClick={this.sortByTitle}>Title</button>
                    <button onClick={this.sortByUser}>User</button>
                    <button onClick={this.sortByStatus}>Status</button>
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            userId={todo.userId}
                            task={todo.title}
                            completed={todo.completed}
                        />
                    ))}
                </>
            )
        } else {
            return (
                <>
                    <h1>Dynamic list of todos</h1>
                    <p>Loading...</p>
                </>
            )
        }
    }
}