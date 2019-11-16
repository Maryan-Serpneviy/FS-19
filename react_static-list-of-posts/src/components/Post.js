import React from 'react'

import User from './User'
import users from '../api/users'

import CommentList from './CommentList'

export default function Post(props) {
    return (
        <div className="post">
            {/* post */}
            <h2>
                <em>Post:</em>
            </h2>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            {/* user */}
            {users.filter(user => user.id === props.userId)
                .map(user => (
                    <User key={user.id} name={user.name} email={user.email} street={user.address.street} suite={user.address.suite} city={user.address.city} />
                ))
            }
            {CommentList(props)}
        </div>
    )
}