import React from 'react'
import './Header.scss'
import Main from '../Main/Main'

export default class Header extends React.Component {
    state = {
        todoInput: '',
        nextTodo: 0,
        todos: []
    }

    handleNewTodo = e => {
        this.setState({ todoInput: e.target.value })
    }

    addNewTodo = e => {
        const { todoInput } = this.state

        if (e.key === 'Enter' && todoInput.trim()) {
            this.setState(state => {
                const newTodo = {
                    id: state.nextTodo,
                    content: state.todoInput,
                    completed: false
                }
                const newTodos = [...state.todos, newTodo]
                
                return {
                    todos: newTodos,
                    nextTodo: state.nextTodo + 1,
                    todoInput: ''
                }
            })
        }
    }

    render() {
        return (
            <>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        value={this.state.todoInput}
                        onChange={this.handleNewTodo}
                        onKeyDown={this.addNewTodo}
                        maxLength={40}
                        className="new-todo"
                        placeholder="What needs to be done?"
                    />
                </header>
                <Main todos={this.state.todos} />
            </>
        )
    }
}
