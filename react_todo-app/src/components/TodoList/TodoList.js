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
        canAdd: false,
        confirm: false,
        action: null,
        currentId: null
    }
    inputField = React.createRef()

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
            this.inputField.current.focus()

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

    removeTodo = () => {
        const { currentId } = this.state
        const updatedTodos = this.state.todos.filter(todo => todo.id !== Number(currentId))
        this.setState({ todos: updatedTodos, confirm: false })
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
                todos: state.todos.filter(todo => !todo.completed),
                confirm: false
            }
        })
    }

    confirmAction = event => {
        const { id, name } = event.target
        this.setState({
            confirm: !this.state.confirm,
            action: name,
            currentId: id
        })
    }

    render() {
        return (
            <section className="todoapp">
                {this.state.confirm && <Confirm
                    action={this.state.action}
                    confirmAction={this.confirmAction}
                    removeTodo={this.removeTodo}
                    clearCompleted={this.clearCompleted}
                />}
                <header className="header">
                    <h1 onClick={this.confirmAction}>todos</h1>
                    <input
                        value={this.state.todoInput}
                        onChange={this.handleNewTodo}
                        onKeyUpCapture={this.addNewTodo}
                        ref={this.inputField}
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
                    confirmAction={this.confirmAction}
                    filterDisplay={this.filterDisplay}
                    clearCompleted={this.clearCompleted}
                    confirmAction={this.confirmAction}
                />
            </section>
        )
    }
}
