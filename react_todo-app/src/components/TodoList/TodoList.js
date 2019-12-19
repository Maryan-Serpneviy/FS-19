import React from 'react'
import './TodoList.scss'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Confirm from './Confirm/Confirm'

const MIN_LENGTH = 4

export default class TodoList extends React.Component {
    state = {
        todoInput: '',
        editValue: '',
        nextTodo: 0,
        todos: [],
        filter: 'All',
        allChecked: false,
        completed: false,
        canAdd: false,
        canEdit: false,
        confirm: false,
        action: null,
        currentId: null
    }

    inputField = React.createRef()

    handleNewTodo = event => {
        this.setState({ todoInput: event.target.value })
    }

    setAddBtn() {
        const { todoInput, todos } = this.state

        todoInput.length > MIN_LENGTH && // if not required length - btn new is disabled
        !todos.find(todo => todo.content === todoInput.trim())
            ? this.setState({ canAdd: true })
            : this.setState({ canAdd: false })
    }

    addNewTodo = event => {
        const { todoInput, nextTodo, todos } = this.state
        const { id } = event.target

        this.setAddBtn()
        
        if (event.key === 'Enter' && todoInput.length > MIN_LENGTH && todoInput.trim() || // on enter
            id === 'btn-new' && todoInput.length > MIN_LENGTH && todoInput.trim() && // on btn new click
            !todos.find(todo => todo.content === todoInput.trim())) { // make sure same todo cannot be added

            this.inputField.current.focus()
            this.setState({
                todos: [
                    ...todos, {
                    id: nextTodo,
                    content: todoInput,
                    completed: false
                }],
                nextTodo: nextTodo + 1,
                todoInput: '',
                canAdd: false,
                confirm: false
            })
        }
    }

    handleTodoCheck = event => {
        const { id } = event.target
        this.hideConfirm()
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
        const updatedTodos = this.state.todos.filter(todo => todo.id !== this.state.currentId)
        this.setState({
            todos: updatedTodos,
            nextTodo: this.state.nextTodo - 1, // decrement id counter
            confirm: false
        })
    }

    checkAllTodos = () => {
        this.hideConfirm()
        this.setState(state => {
            state.allChecked = !state.allChecked
            for (const todo of state.todos) {
                todo.completed = state.allChecked
            }
            return state
        })
    }

    setFilter = event => { // All / Active / Completed
        this.setState({
            filter: event.target.innerText,
            confirm: false
        })
    }

    clearCompleted = () => {
        this.setState(state => {
            return {
                todos: state.todos.filter(todo => !todo.completed),
                nextTodo: 0, // reset id counter
                confirm: false
            }
        })
    }

    confirmAction = event => {
        const { id, name } = event.target
        this.setState({
            confirm: !this.state.confirm,
            action: name,
            currentId: Number(id)
        })
    }

    hideConfirm = () => this.setState({ confirm: false })

    handleTodoEdit = event => {
        this.setState({ editValue: event.target.value })
    }

    editTodo = event => {
        const id = Number(/\d+/.exec(event.target.htmlFor)[0])
        const isCompleted = this.state.todos.find(todo => todo.id === id).completed
        this.setState({
            canEdit: !isCompleted, // disable edit if completed
            currentId: id,
            editValue: event.target.innerText,
            confirm: false
        })
    }

    finishTodoEdit = event => {
        if (event.key === 'Enter') {
            this.changeTodoText()
        }
        if (event.key === 'Escape') {
            this.setState({ canEdit: false })
        }
    }

    changeTodoText = () => { // onBlur
        const { currentId, editValue } = this.state
        this.setState(state => {
            const editable = state.todos.find(todo => todo.id === currentId)
            editable.content = editValue
            return {
                todos: state.todos,
                canEdit: !state.canEdit
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const todoEdit = document.querySelector('.todo-edit')
        if (todoEdit) {
            todoEdit.focus()
            todoEdit.value = this.state.editValue
        }
    }

    componentDidMount() {
        this.setAddBtn()
        this.inputField.current.focus()
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('state', JSON.stringify(nextState))
    }

    componentWillMount() {
        if (localStorage.getItem('state')) {
            const storedState = JSON.parse(localStorage.getItem('state'))
            this.setState(storedState)
        }
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
                    <h1>todos</h1>
                    <input
                        value={this.state.todoInput}
                        onChange={this.handleNewTodo}
                        onKeyUpCapture={this.addNewTodo}
                        onFocus={this.hideConfirm}
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
                    handleTodoCheck={this.handleTodoCheck}
                    removeTodo={this.removeTodo}
                    checkAllTodos={this.checkAllTodos}
                    filter={this.state.filter}
                    // edit
                    current={this.state.currentId}
                    canEdit={this.state.canEdit}
                    editValue={this.state.editValue}
                    handleTodoEdit={this.handleTodoEdit}
                    editTodo={this.editTodo}
                    finishTodoEdit={this.finishTodoEdit}
                    changeTodoText={this.changeTodoText}
                />
                <Footer
                    todosLeft={this.state.todos.filter(todo => !todo.completed).length}
                    completed={this.state.todos.some(todo => todo.completed)}
                    filter={this.state.filter}
                    setFilter={this.setFilter}
                    confirmAction={this.confirmAction}
                    clearCompleted={this.clearCompleted}
                    confirmAction={this.confirmAction}
                />
            </section>
        )
    }
}
