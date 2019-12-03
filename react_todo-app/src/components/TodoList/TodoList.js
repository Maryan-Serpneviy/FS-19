import React from 'react'
import './TodoList.scss'
import Main from './Main/Main'
import Footer from './Footer/Footer'

export default class TodoList extends React.Component {
    state = {
        todoInput: '',
        nextTodo: 0,
        todos: [],
        display: 'All',
        allToggled: false,
        completed: false
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

    toggleAllTodos = () => {
        this.setState(state => {
            state.allToggled = !state.allToggled
            for (const todo of state.todos) {
                todo.completed = state.allToggled
            }
            return state
        })
    }

    filterDisplay = event => {
        this.setState({ display: event.target.innerText })
    }

    clearCompleted = () => {
        this.setState(state => {
            return {
                todos: state.todos.filter(todo => !todo.completed)
            }
        })
    }

    render() {
        return (
            <section className="todoapp">
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
                    display={this.state.display}
                />
                <Footer
                    todosLeft={this.state.todos.filter(todo => !todo.completed).length}
                    completed={this.state.todos.some(todo => todo.completed)}
                    display={this.state.display}
                    filterDisplay={this.filterDisplay}
                    clearCompleted={this.clearCompleted}
                />
            </section>
        )
    }
}
