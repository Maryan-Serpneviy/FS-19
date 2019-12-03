import React from 'react'
import './Header.scss'
import Main from '../Main/Main'

export default class Header extends React.Component {
    state = {
        todoInput: '',
        nextTodo: 0,
        todos: [],
        allToggled: false
    }

    handleNewTodo = e => {
        this.setState({ todoInput: e.target.value })
    }

    addNewTodo = e => {
        const { todoInput, todos } = this.state

        if (e.key === 'Enter' && todoInput.trim()) {
            this.setState(state => {
                todos.push({
                    id: state.nextTodo,
                    content: todoInput,
                    completed: false
                })
                return {
                    todos,
                    nextTodo: state.nextTodo + 1,
                    todoInput: ''
                }
            })
        }
    }

    handleCompletedTodo = event => {
        const { id } = event.target
        this.setState(state => {
            for (const todo of state.todos) {
                if (todo.id === Number(id)) {
                    todo.completed = !todo.completed
                }
            }
            return state
        })
    }

    removeTodo = event => {
        const { id } = event.target
        const updatedTodos = this.state.todos.filter(todo => todo.id !== Number(id))
        this.setState({ todos: updatedTodos })
    }

    toggleAllTodos = checked => {
        this.setState(state => {
            state.allToggled = !state.allToggled
            for (const todo of state.todos) {
                todo.completed = state.allToggled
            }
            // return {
            //     todos: state.todos.map(todo => {
            //         return {
            //             id: todo.id,
            //             content: todo.content,
            //             completed: !state.toggleAll
            //         }
            //     })
            // }
            return state
        })
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
                <Main
                    todos={this.state.todos}
                    handleCompletedTodo={this.handleCompletedTodo}
                    removeTodo={this.removeTodo}
                    toggleAllTodos={this.toggleAllTodos}
                />
            </>
        )
    }
}
