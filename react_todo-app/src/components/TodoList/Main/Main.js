import React from 'react'
import './Main.scss'

export default class Main extends React.Component {
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
                                    onChange={this.props.handleCompletedTodo}
                                    type="checkbox"
                                    className="toggle"
                                />
                                <label htmlFor={`todo-${todo.id}`}>{todo.content}</label>
                                <button id={todo.id} onPointerDown={this.props.removeTodo} className="destroy" />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}
