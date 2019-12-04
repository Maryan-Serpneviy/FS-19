import React from 'react'
import PropTypes from 'prop-types'
import './Main.scss'
import ToggleAll from './ToggleAll'

export default function Main(props) {
    return (
        <section className="main">
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
                            {!props.canEdit && <input
                                id={todo.id}
                                checked={todo.completed}
                                onChange={props.handleCompletedTodo}
                                className="toggle"
                                type="checkbox"
                            />}
                            {props.canEdit && todo.id === props.current
                                ? <input
                                    onChange={props.handleTodoEdit}
                                    onKeyDown={props.finishTodoEdit}
                                    value={props.editValue}
                                    className="todo-edit"
                                  />
                                : <label onClick={props.editTodo} htmlFor={`todo-${todo.id}`}>{todo.content}</label>
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
    display: PropTypes.oneOf(['All', 'Active', 'Completed']).isRequired,
    handleCompletedTodo: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired,
    toggleAllTodos: PropTypes.func.isRequired,

    current: PropTypes.number,
    canEdit: PropTypes.bool.isRequired,
    handleTodoEdit: PropTypes.func,
    editTodo: PropTypes.func
}
