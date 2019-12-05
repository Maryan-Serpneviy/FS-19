import React from 'react'

import User from './User'
import users from '../api/users'

export default function TodoItem(props) {
    return (
        <div className="todo">
            {/* task */}
            <h3>{props.task}</h3>
            {/* user */}
            {users.filter(user => props.userId === user.id)
                .map(user => (
                    <User key={user.id} name={user.name} username={user.username} email={user.email} />
                ))
            }
        </div>
    )
}