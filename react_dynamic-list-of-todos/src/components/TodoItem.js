import React, {useState, useEffect} from 'react'
import User from './User'
import getUsers from '../api/users'

export default function TodoItem(props) {
    const [isLoaded, setLoaded] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data)
            setLoaded(true)
        })
    }, [])

    if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="todo">
                {/* task */}
                <h3>{props.task}</h3>
                {/* user */}
                {users.filter(user => props.userId === user.id)
                    .map(user => (
                        <User
                            key={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            completed={props.completed}
                        />
                    ))
                }
            </div>
        )
    }
}