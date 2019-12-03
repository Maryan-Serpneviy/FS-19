import React from 'react'
import './Main.scss'
import ToggleAll from './ToggleAll'

export default function Main(props) {
    return (
        <section className="main" style={{ display: 'block' }}>
            <ToggleAll
                checked={props.todos.every(todo => todo.completed)}
                toggleAllTodos={props.toggleAllTodos}
            />
            <ul className="todo-list">
                {props.todos.filter(todo =>
                    props.display === 'All' ||
                    props.display === 'Completed' && todo.completed ||
                    props.display === 'Active' && !todo.completed)
                    .map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <div className="view">
                            <input
                                id={todo.id}
                                checked={todo.completed}
                                onChange={props.handleCompletedTodo}
                                className="toggle"
                                type="checkbox"
                            />
                            <label htmlFor={`todo-${todo.id}`}>{todo.content}</label>
                            <button id={todo.id} onPointerDown={props.removeTodo} className="destroy" />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
