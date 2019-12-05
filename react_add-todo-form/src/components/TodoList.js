import React from 'react'
import TodoItem from './TodoItem'
import todos from '../api/todos'
import users from '../api/users'

export default class TodoList extends React.Component {
    state = {
        todoInput: '',
        id: 1,
        todos: [],
        user: '',
        errorTitle: false,
        errorUser: false
    }

    handleNewTodo = event => {
        this.setState({ todoInput: event.target.value })        
    }

    addNewTodo = () => {
        const { todoInput, id, todos, user } = this.state

        if (!todoInput.length) {
            this.setState({ errorTitle: true })
        } else if (!user) {
            this.setState({ errorUser: true })
        } else if (todoInput.match(/[\w ]/)) {
            this.setState(state => {
                todos.push({
                    id,
                    title: todoInput
                })
                return {
                    todos,
                    id: state.id + 1,
                    todoInput: '',
                    errorTitle: false,
                    errorUser: false
                }
            })
        }
    }

    handleChange = event => {
        this.setState({ user: event.target.value })
    }

    render() {
        return (
            <>
                <h1>React add todo form</h1>
                <input
                    onChange={this.handleNewTodo}
                    value={this.state.todoInput}
                    placeholder="Add new todo"
                />
                <br />
                {this.state.errorTitle && <i>Enter the title</i>}
                <span>{this.state.todoInput}</span>
                <br />
                <select value={this.state.user} onChange={this.handleChange}>
                    <option>-- Choose a user --</option>
                    {users.map(todo => (
                        <option key={todo.username}>{todo.username}</option>
                    ))}    
                </select>
                <br/>
                {this.state.errorUser && <i>Choose a user</i>}
                <br />
                <br />
                <button onClick={this.addNewTodo}>Add</button>
                {this.state.todos.map(todo => (
                    <TodoItem key={todo.id} userId={todo.id} task={todo.title} />
                ))}
                {todos.map(todo => (
                    <TodoItem key={todo.id} userId={todo.userId} task={todo.title} />
                ))}
            </>
        )
    }
}