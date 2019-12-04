import React from 'react'
import './TodoList.scss'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Confirm from './Confirm/Confirm'

const MIN_LENGTH = 4

export default class TodoList extends React.Component {
    state = {
        todoInput: '',
        nextTodo: 0,
        todos: [],
        display: 'All',
        allToggled: false,
        completed: false,
        confirm: false,
        canAdd: false
    }

    handleNewTodo = event => {
        this.setState({ todoInput: event.target.value })
    }

    addNewTodo = event => {
        const { todoInput, todos } = this.state
        const { id } = event.target

        todoInput.length > MIN_LENGTH
            ? this.setState({ canAdd: true })
            : this.setState({ canAdd: false })
        
        if (event.key === 'Enter' && todoInput.length > MIN_LENGTH && todoInput.trim() ||
            id === 'btn-new' && todoInput.length > MIN_LENGTH && todoInput.trim()) {
            this.setState(state => {
                todos.push({
                    id: state.nextTodo,
                    content: todoInput,
                    completed: false
                })
                return {
                    todos,
                    nextTodo: state.nextTodo + 1,
                    todoInput: '',
                    canAdd: false
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

    confirmAction = event => {
        this.setState({ confirm: !this.state.confirm })
    }

    render() {
        return (
            <section className="todoapp">
                {this.state.confirm && <Confirm active={this.state.confirm} />}
                <header className="header">
                    <h1 onClick={this.confirmAction} style={{ userSelect: 'none' }}>todos</h1>
                    <input
                        value={this.state.todoInput}
                        onChange={this.handleNewTodo}
                        onKeyUpCapture={this.addNewTodo}
                        maxLength={40}
                        className="new-todo"
                        placeholder="What needs to be done?"
                    />
                    <button
                        onPointerUp={this.addNewTodo}
                        className={this.state.canAdd ? 'add-todo_active' : 'add-todo'}
                        id="btn-new"
                    >+</button>
                </header>
                <Main
                    todos={this.state.todos}
                    confirmAction={this.confirmAction}
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
