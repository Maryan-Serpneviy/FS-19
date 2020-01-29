import React, { useState, useEffect, useRef } from 'react'
import './TodoList.scss'
import MainContainer from './Main/MainContainer'
import FooterContainer from './Footer/FooterContainer'
import Confirm from './Confirm/Confirm'

export default function TodoList(props) {
    const [canAdd, setCanAdd] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const MIN_LENGTH = 4
    const inputField = useRef()

    const handleTodoInput = e => props.updateInput(e.target.value)

    const setAddBtn = () => {
        props.todoInput.length > MIN_LENGTH && // if not required length - btn new is disabled
        !props.todos.find(todo => todo.content === props.todoInput.trim())
            ? setCanAdd(true)
            : setCanAdd(false)
    }

    const addNewTodo = e => {
        const { value } = e.target
        setAddBtn()

        if (e.key === 'Enter' && value.trim() &&
            props.todoInput.length > MIN_LENGTH &&
            !props.todos.find(todo => todo.content === value.trim())) { // check for matches

            setCanAdd(false)
            props.add(props.todoInput)
            inputField.current.focus()
        }
    }

    const handleBtnNewTodo = () => {
        if (props.todoInput.trim() &&
            props.todoInput.length > MIN_LENGTH &&
            !props.todos.find(todo => todo.content === props.todoInput.trim())) { // check for matches

            setCanAdd(false)
            setShowConfirm(false)
            props.add(props.todoInput)
            inputField.current.focus()
        }
    }

    const confirmAction = e => {
        const { id, name } = e.target
        setShowConfirm(true)
        props.confirmAction(id, name)
    }

    useEffect(() => {
        setAddBtn()
        document.addEventListener('click', event => {
            if (showConfirm && event.target.className !== 'todoapp__confirm' || event.target.className === '') {
                setShowConfirm(false)
            }
        })
    }, [])

    useEffect(() => {
        props.changeFilter(props.history.location.pathname)
    }, [props.history.location])

    return (
        <section className="todoapp">
            {showConfirm && <Confirm
                action={props.action}
                currentId={props.currentId}
                showConfirm={setShowConfirm}
                removeTodo={props.removeTodo}
                clearCompleted={props.clearCompleted}
                confirmAction={confirmAction}
            />}
            <header className="header">
                <h1>todos</h1>
                <input
                    value={props.todoInput}
                    onChange={handleTodoInput}
                    onKeyUpCapture={addNewTodo}
                    onFocus={() => setShowConfirm(false)}
                    ref={inputField}
                    maxLength={40}
                    className="new-todo"
                    placeholder="What needs to be done?"
                />
                <button
                    onPointerUp={handleBtnNewTodo}
                    className={canAdd ? 'add-todo_active' : 'add-todo'}
                    id="btn-new"
                >+</button>
            </header>
            <MainContainer
                showConfirm={setShowConfirm}
                confirmAction={confirmAction}
            />
            <FooterContainer
                showConfirm={setShowConfirm}
                confirmAction={confirmAction}
            />
        </section>
    )
}
