import React from 'react'
import TodoItem from './TodoItem'
import User from './User'

import todos from '../api/todos'
import users from '../api/users'

export default function TodoList() {
    return (
        <>
            <h1>Static list of todos</h1>
            {todos.map(todo => (
                <TodoItem title={todo.title} userId={todo.userId} key={todo.id} />
            ))}
            <h2>Users: </h2>
            {users.map(user => (
                <User name={user.name} username={user.username} key={user.id} />
            ))}
        </>
    )
}