import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './Main.scss'
import ToggleAll from './ToggleAll'

export default function Main(props) {
    return (
        <section className="main">
            <ToggleAll
                checked={props.todos.every(todo => todo.completed)}
                checkAllTodos={props.checkAllTodos}
            />
            <ul className="todo-list">
                {props.todos.filter(todo =>
                    props.filter === 'All' ||
                    props.filter === 'Completed' && todo.completed ||
                    props.filter === 'Active' && !todo.completed)
                    .map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <div className="view">
                            {!props.canEdit && <input
                                id={todo.id}
                                checked={todo.completed}
                                onChange={props.handleTodoCheck}
                                className="toggle"
                                type="checkbox"
                            />}
                            {props.canEdit && todo.id === props.current
                                ? <input
                                    onChange={props.handleTodoEdit}
                                    onKeyDown={props.finishTodoEdit}
                                    onBlur={props.changeTodoText}
                                    value={props.editValue}
                                    className="todo-edit"
                                  />
                                : <label onPointerDown={props.editTodo} htmlFor={`todo-${todo.id}`}>{todo.content}</label>
                            }
                            {!props.canEdit && <button
                                id={todo.id}
                                onPointerDown={props.confirmAction}
                                name="remove"
                                className="destroy"
                            />}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Main.propTypes = {
    todos: PropTypes.array.isRequired,
    filter: PropTypes.oneOf(['All', 'Active', 'Completed']).isRequired,
    handleTodoCheck: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired,
    checkAllTodos: PropTypes.func.isRequired,
    // edit
    canEdit: PropTypes.bool.isRequired,
    current: PropTypes.number,
    editValue: PropTypes.string.isRequired,
    handleTodoEdit: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    finishTodoEdit: PropTypes.func.isRequired,
    changeTodoText: PropTypes.func.isRequired
}
