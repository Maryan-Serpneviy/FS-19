import React from 'react'

import TodoItem from './TodoItem'
import todos from '../api/todos'

export default function TodoList() {
    return (
        <>
            <h1>Static list of todos</h1>
            {todos.map(todo => (
                <TodoItem key={todo.id} userId={todo.userId} task={todo.title} />
            ))}
        </>
    )
}