import React from 'react'
import './Main.scss'
import ToggleAll from './ToggleAll'

export default class Main extends React.Component {
    
    render() {
        return (
            <section className="main" style={{ display: 'block' }}>
                <ToggleAll
                    checked={this.props.todos.every(todo => todo.completed)}
                    toggleAllTodos={this.props.toggleAllTodos}
                />
                <ul className="todo-list">
                    {this.props.todos.map(todo => (
                        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                            <div className="view">
                                <input
                                    id={todo.id}
                                    checked={todo.completed}
                                    onChange={this.props.handleCompletedTodo}
                                    className="toggle"
                                    type="checkbox"
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
