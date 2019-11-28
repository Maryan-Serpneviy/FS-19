import React from 'react'
import TodoItem from './TodoItem'
import getTodos from '../api/todos'

export default class TodoList extends React.Component {
    state = {
        isRequested: false,
        isLoaded: false,
        todos: []
    }

    download = () => {
        this.setState({
            isRequested: !this.state.isRequested,
        })

        getTodos().then(todos => {
            this.setState({ isLoaded: true, todos })
        })
    }

    handleSort = e => {
        const prop = e.target.id
        this.setState(prev => {
            return prev.todos.sort((a, b) => {
                if (a[prop] > b[prop]) return 1
                else if (a[prop] < b[prop]) return -1
                return 0
            })
        })
    }

    render() {
        const { isRequested, isLoaded, todos } = this.state

        if (!isRequested) {
            return <button onClick={this.download}>Fetch</button>
        }
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <button onClick={() => {window.location.reload()}}>Reload</button>
                <h2>Sort by:</h2>
                <button id="title" onClick={this.handleSort}>Title</button>
                <button id="userId" onClick={this.handleSort}>User</button>
                <button id="completed" onClick={this.handleSort}>Status</button>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        userId={todo.userId}
                        task={todo.title}
                        completed={todo.completed}
                    />
                ))}
            </div>
        )
    }
}