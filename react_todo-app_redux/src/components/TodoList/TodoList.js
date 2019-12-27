import React, { useState, useEffect, useRef } from 'react'
import './TodoList.scss'
import MainContainer from './Main/MainContainer'
import FooterContainer from './Footer/FooterContainer'
import ConfirmContainer from './Confirm/ConfirmContainer'

export default function TodoList(props) {
    // const [todoInput, setTodoInput] = useState(localStorage.getItem('todoInput') || '')
    // const [nextTodo, setNextTodo] = useState(Number(localStorage.getItem('nextTodo')) || 0)
    // const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    // const [filter, setFilter] = useState(localStorage.getItem('filter') || 'All')
    // const [allChecked, setAllChecked] = useState(localStorage.getItem(Boolean('allChecked')) || false)
    const [canAdd, setCanAdd] = useState(false)

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

            props.add(props.todoInput)
            inputField.current.focus()
        }
    }

    const handleBtnNewTodo = () => {
        if (props.todoInput.trim() &&
            props.todoInput.length > MIN_LENGTH &&
            !props.todos.find(todo => todo.content === props.todoInput.trim())) { // check for matches

            props.add(props.todoInput)
            inputField.current.focus()
        }
    }

    const confirmAction = e => {
        const { id, name } = e.target
        props.confirmAction(props.confirm, id, name)
    }

    useEffect(() => {
        setAddBtn()
    }, [])

    // useEffect(() => {
    //     localStorage.setItem('todoInput', todoInput)
    //     localStorage.setItem('nextTodo', String(nextTodo))
    //     localStorage.setItem('todos', JSON.stringify(todos))
    //     localStorage.setItem('filter', filter)
    //     localStorage.setItem('allChecked', String(allChecked))
    //     inputField.current.focus()
    // }, [nextTodo, todos, filter, allChecked])

    return (
        <section className="todoapp">
            {props.confirm &&
            <ConfirmContainer confirmAction={confirmAction}/>}
            <header className="header">
                <h1>todos</h1>
                <input
                    value={props.todoInput}
                    onChange={handleTodoInput}
                    onKeyUpCapture={addNewTodo}
                    onFocus={props.hideConfirm}
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
            <MainContainer confirmAction={confirmAction}/>
            <FooterContainer confirmAction={confirmAction}/>
        </section>
    )
}
