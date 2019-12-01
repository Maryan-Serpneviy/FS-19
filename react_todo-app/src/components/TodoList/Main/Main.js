import React from 'react'
import './Main.scss'
import TodoItem from './TodoItem/TodoItem'

export default class Main extends React.Component {
    state = {
        checked: false
    }

    handleTodoCheck = event => {
        const { id, checked } = event.target

        for (const todo of this.props.todos) {
            if (todo.id === Number(id)) {
                todo.completed = checked
            }
        }
        this.setState({ checked })
    }

    render() {
        return (
            <section className="main" style={{ display: 'block' }}>
                <input type="checkbox" id="toggle-all" className="toggle-all" />
                <label htmlFor="toggle-all">Mark all as complete</label>

                <ul className="todo-list">
                    {this.props.todos.map(todo => (
                        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                            <div className="view">
                                <input
                                    id={todo.id}
                                    onChange={this.handleTodoCheck}
                                    type="checkbox"
                                    className="toggle"
                                />
                                <label htmlFor="todo-1">{todo.content}</label>
                                <button type="button" className="destroy" />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}
