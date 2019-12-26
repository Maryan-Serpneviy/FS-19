import React, { useState, useEffect, useRef } from 'react'
import './TodoList.scss'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Confirm from './Confirm/Confirm'

export default function TodoList(props) {
    // const [todoInput, setTodoInput] = useState(localStorage.getItem('todoInput') || '')
    // const [nextTodo, setNextTodo] = useState(Number(localStorage.getItem('nextTodo')) || 0)
    // const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    // const [filter, setFilter] = useState(localStorage.getItem('filter') || 'All')
    // const [allChecked, setAllChecked] = useState(localStorage.getItem(Boolean('allChecked')) || false)
    const [canAdd, setCanAdd] = useState(false)

    const MIN_LENGTH = 4
    const inputField = useRef()

    function handleNewTodo(event) {
        props.updateInput(event.target.value)
    }

    function setAddBtn() {
        props.todoInput.length > MIN_LENGTH && // if not required length - btn new is disabled
        !props.todos.find(todo => todo.content === props.todoInput.trim())
            ? setCanAdd(true)
            : setCanAdd(false)
    }

    function addNewTodo(event) {
        const { id, value } = event.target

        setAddBtn()
        if (event.key === 'Enter' || id === 'btn-new') {
            if (props.todoInput.length > MIN_LENGTH && value.trim() &&
               !props.todos.find(todo => todo.content === value.trim())) { // check for matches

                props.add(props.todoInput)
                inputField.current.focus()
            }
        }
    }

    function checkAllTodos() { // HERE !!!!!1111
        props.checkAll(props.allChecked)
    }

    function changeFilter(event) { // All / Active / Completed
        props.changeFilter(event.target.innerText)
    }

    function confirmAction(event) {
        const { id, name } = event.target
        props.confirmAction(props.confirm, id, name)
    }

    function handleTodoEdit(event) {
        props.setEditInput(event.target.value)
    }

    function editTodo(event) {
        const id = Number(/\d+/.exec(event.target.htmlFor)[0])
        const isCompleted = props.todos.find(todo => todo.id === id).completed
        const todoText = event.target.innerText
        props.editTodo(id, isCompleted, todoText)
    }

    function finishTodoEdit(event) {
        if (event.key === 'Enter') {
            changeTodoText()
        }
        if (event.key === 'Escape') {
            props.setEditStatus(false)
        }
    }

    function changeTodoText() { // onBlur
        const editable = props.todos.find(todo => todo.id === props.currentId)
        editable.content = props.editInput
        props.setEditStatus(false)
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
            {props.confirm && <Confirm
                currentId={props.currentId}
                action={props.action}
                confirmAction={confirmAction}
                removeTodo={props.remove}
                clearCompleted={props.clearCompleted}
            />}
            <header className="header">
                <h1>todos</h1>
                <input
                    value={props.todoInput}
                    onChange={handleNewTodo}
                    onKeyUpCapture={addNewTodo}
                    onFocus={props.hideConfirm}
                    ref={inputField}
                    maxLength={40}
                    className="new-todo"
                    placeholder="What needs to be done?"
                />
                <button
                    onPointerUp={addNewTodo}
                    className={canAdd ? 'add-todo_active' : 'add-todo'}
                    id="btn-new"
                >+</button>
            </header>
            <Main
                todos={props.todos}
                confirmAction={confirmAction}
                handleTodoCheck={props.check}
                checkAllTodos={props.checkAll} // here
                filter={props.filter}
                // edit
                currentId={props.currentId}
                canEdit={props.canEdit}
                editInput={props.editInput}
                handleTodoEdit={handleTodoEdit}
                editTodo={editTodo}
                finishTodoEdit={finishTodoEdit}
                changeTodoText={changeTodoText}
            />
            <Footer
                todosLeft={props.todos.filter(todo => !todo.completed).length}
                completed={props.todos.some(todo => todo.completed)}
                filter={props.filter}
                changeFilter={changeFilter}
                confirmAction={confirmAction}
            />
        </section>
    )
}
