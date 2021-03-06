import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './Main.scss'
import ToggleAll from './ToggleAll'

export default function Main(props) {
    const checkTodo = e => {
        props.check(e.target.id)
        props.showConfirm(false)
    }
    const handleTodoEdit = e => props.handleEditInput(e.target.value)

    const editTodo = e => {
        const id = Number(/\d+/.exec(e.target.htmlFor)[0])
        const isCompleted = props.todos.find(todo => todo.completed)
        const todoText = e.target.innerText
        props.editTodo(id, isCompleted, todoText)
    }

    const changeTodoText = () => { // onBlur
        const editable = props.todos.find(todo => todo.id === props.currentId)
        editable.content = props.editInput
        props.setEditStatus(false)
    }

    const finishTodoEdit = e => {
        if (e.key === 'Enter') {
            changeTodoText()
        }
        if (e.key === 'Escape') {
            props.setEditStatus(false)
        }
    }

    const editField = useRef()

    useEffect(() => {
        if (editField.current) {
            editField.current.focus()
        }
    }, [props.canEdit])
    
    return (
        <section className="main">
            <ToggleAll
                todos={props.todos}
                checkAll={props.checkAll}
            />
            <ul className="todo-list">
                {props.todos
                    .filter(todo =>
                    props.filter === '' ||
                    props.filter === 'Completed' && todo.completed ||
                    props.filter === 'Active' && !todo.completed)
                    .map(todo => (
                    <li key={todo.key} className={todo.completed ? 'completed' : ''}>
                        <div className="view">
                            {!props.canEdit && <input
                                id={todo.id}
                                checked={todo.completed}
                                onChange={checkTodo}
                                className="toggle"
                                type="checkbox"
                            />}
                            {props.canEdit && todo.id === props.currentId
                                ? <input
                                    onFocus={() => props.showConfirm(false)}
                                    onChange={handleTodoEdit}
                                    onKeyDown={finishTodoEdit}
                                    onBlur={changeTodoText}
                                    value={props.editInput}
                                    ref={editField}
                                    className="todo-edit"
                                  />
                                : <label onPointerDown={editTodo} htmlFor={`todo-${todo.id}`}>{todo.content}</label>
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
    check: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired,
    filter: PropTypes.oneOf(['', 'Active', 'Completed']).isRequired,
    // edit
    canEdit: PropTypes.bool.isRequired,
    currentId: PropTypes.number,
    editInput: PropTypes.string,
    handleEditInput: PropTypes.func.isRequired
}
