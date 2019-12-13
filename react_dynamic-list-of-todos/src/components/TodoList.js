import React, {useState} from 'react'
import TodoItem from './TodoItem'
import getTodos from '../api/todos'

export default function TodoList() {
    const [isRequested, setRequested] = useState(false)
    const [isLoaded, setLoaded] = useState(false)
    const [todos, setTodos] = useState([])

    function download() {
        setRequested(true)

        getTodos().then(data => {
            setTodos(data)
            setLoaded(true)
        })
    }

    function handleSort(e) {
        const prop = e.target.id
        setTodos([...todos].sort((a, b) => {
            if (a[prop] > b[prop]) return 1
            else if (a[prop] < b[prop]) return -1
            return 0
        }))
    }

    if (!isRequested) {
        return <button onClick={download}>Fetch</button>
    }
    if (!isLoaded) {
        return <div>Loading...</div>
    }
    return (
        <>
            <button onClick={() => {window.location.reload()}}>Reload</button>
            <h2>Sort by:</h2>
            <button id="title" onClick={handleSort}>Title</button>
            <button id="userId" onClick={handleSort}>User</button>
            <button id="completed" onClick={handleSort}>Status</button>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    userId={todo.userId}
                    task={todo.title}
                    completed={todo.completed}
                />
            ))}
        </>
    )
}