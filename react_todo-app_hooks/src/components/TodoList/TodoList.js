import React, { useState, useEffect, useRef } from 'react'
import './TodoList.scss'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Confirm from './Confirm/Confirm'

export default function TodoList() {
    const [todoInput, setTodoInput] = useState(localStorage.getItem('todoInput') || '')
    const [nextTodo, setNextTodo] = useState(Number(localStorage.getItem('nextTodo')) || 0)
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [filter, setFilter] = useState(localStorage.getItem('filter') || 'All')
    const [allChecked, setAllChecked] = useState(localStorage.getItem(Boolean('allChecked')) || false)
    const [editValue, setEditValue] = useState('')
    const [canAdd, setCanAdd] = useState(false)
    const [canEdit, setCanEdit] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [action, setAction] = useState(null)
    const [currentId, setCurrentId] = useState(null)

    const MIN_LENGTH = 4
    const inputField = useRef()

    function handleNewTodo(event) {
        setTodoInput(event.target.value)
    }

    function setAddBtn() {
        todoInput.length > MIN_LENGTH && // if not required length - btn new is disabled
        !todos.find(todo => todo.content === todoInput.trim())
            ? setCanAdd(true)
            : setCanAdd(false)
    }

    function addNewTodo(event) {
        const { id } = event.target

        setAddBtn()
        
        if (event.key === 'Enter' && todoInput.length > MIN_LENGTH && todoInput.trim() || // on enter
            id === 'btn-new' && todoInput.length > MIN_LENGTH && todoInput.trim() && // on btn new click
            !todos.find(todo => todo.content === todoInput.trim())) {
            inputField.current.focus()

            todos.push({
                id: nextTodo,
                content: todoInput,
                completed: false
            })
            setNextTodo(prevNextTodo => prevNextTodo + 1)
            setTodoInput('')
            setCanAdd(false)
            hideConfirm()
        }
    }

    function handleTodoCheck(event) {
        const { id } = event.target
        
        setTodos(todos.map(todo => {
            if (todo.id === Number(id)) {
                todo.completed = !todo.completed
            }
            return todo
        }))
        hideConfirm()
    }

    function removeTodo() {
        setTodos(todos.filter(todo => todo.id !== currentId))
        setNextTodo(prevNextTodo => prevNextTodo - 1) // decrement id counter
        hideConfirm()
    }

    function checkAllTodos() {
        for (const todo of todos) {
            todo.completed = allChecked
        }
        setAllChecked(!allChecked)
        hideConfirm()
    }

    function changeFilter(event) { // All / Active / Completed
        setFilter(event.target.innerText)
        hideConfirm()
    }

    function clearCompleted() {
        setTodos(todos.filter(todo => !todo.completed))
        setNextTodo(0) // reset id counter
        hideConfirm()
    }

    function confirmAction(event) {
        const { id, name } = event.target
        setConfirm(!confirm)
        setAction(name)
        setCurrentId(Number(id))
    }

    function hideConfirm() {
        setConfirm(false)
    }

    function handleTodoEdit(event) {
        setEditValue(event.target.value)
    }

    function editTodo(event) {
        const id = Number(/\d+/.exec(event.target.htmlFor)[0])
        const isCompleted = todos.find(todo => todo.id === id).completed
        setCanEdit(!isCompleted) // disable edit if completed
        setCurrentId(id)
        setEditValue(event.target.innerText)
        hideConfirm()
    }

    function finishTodoEdit(event) {
        if (event.key === 'Enter') {
            changeTodoText()
        }
        if (event.key === 'Escape') {
            setCanEdit(false)
        }
    }

    function changeTodoText() { // onBlur
        const editable = todos.find(todo => todo.id === currentId)
        editable.content = editValue
        setCanEdit(!canEdit)
    }

    useEffect(() => {
        setAddBtn()
    }, [])

    useEffect(() => {
        const todoEdit = document.querySelector('.todo-edit')
        if (todoEdit) {
            todoEdit.focus()
            todoEdit.value = editValue
        }
    }, [canEdit])

    useEffect(() => {
        localStorage.setItem('todoInput', todoInput)
        localStorage.setItem('nextTodo', String(nextTodo))
        localStorage.setItem('todos', JSON.stringify(todos))
        localStorage.setItem('filter', filter)
        localStorage.setItem('allChecked', String(allChecked))
        inputField.current.focus()
    }, [todoInput, nextTodo, todos, filter, allChecked])

    return (
        <section className="todoapp">
            {confirm && <Confirm
                action={action}
                confirmAction={confirmAction}
                removeTodo={removeTodo}
                clearCompleted={clearCompleted}
            />}
            <header className="header">
                <h1>todos</h1>
                <input
                    value={todoInput}
                    onChange={handleNewTodo}
                    onKeyUpCapture={addNewTodo}
                    onFocus={hideConfirm}
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
                todos={todos}
                confirmAction={confirmAction}
                handleTodoCheck={handleTodoCheck}
                removeTodo={removeTodo}
                checkAllTodos={checkAllTodos}
                filter={filter}
                // edit
                current={currentId}
                canEdit={canEdit}
                editValue={editValue}
                handleTodoEdit={handleTodoEdit}
                editTodo={editTodo}
                finishTodoEdit={finishTodoEdit}
                changeTodoText={changeTodoText}
            />
            <Footer
                todosLeft={todos.filter(todo => !todo.completed).length}
                completed={todos.some(todo => todo.completed)}
                filter={filter}
                changeFilter={changeFilter}
                confirmAction={confirmAction}
                clearCompleted={clearCompleted}
                hideConfirm={hideConfirm}
            />
        </section>
    )
}
