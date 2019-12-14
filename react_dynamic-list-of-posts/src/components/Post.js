import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import User from './User'
import getUsers from '../api/users'
import CommentList from './CommentList'

export default function Post(props) {
    const [isLoaded, setLoaded] = useState(false)
    const [users, setUsers] = useState([])

    const title = useRef()
    const body = useRef()

    useEffect(() => {
        getUsers().then(data => {
            setLoaded(true)
            setUsers(data)
        })
    }, [])

    if (props.inputVal) {
        const markedTitle = title.current.textContent
        .replace(new RegExp(props.inputVal, "gi"), `<mark>${props.inputVal}</mark>`)
        title.current.innerHTML = markedTitle

        const markedBody = body.current.textContent
        .replace(new RegExp(props.inputVal, "gi"), `<mark>${props.inputVal}</mark>`)
        body.current.innerHTML = markedBody
    }

    if (isLoaded) {
        return (
            <div className="post">
                {/* post */}
                <h2>
                    <em>Post:</em>
                </h2>
                <h2 ref={title}>{props.title}</h2>
                <p ref={body}>{props.body}</p>
                {/* user */}
                {users.filter(user => user.id === props.userId)
                    .map(user => (
                        <User
                            key={user.id}
                            name={user.name}
                            email={user.email}
                            street={user.address.street}
                            suite={user.address.suite}
                            city={user.address.city}
                        />
                    ))
                }
                <CommentList post={props} />
            </div>
        )
    } else {
        return <div>Loading user...</div>
    }
}

Post.propTypes = {
    postId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    inputVal: PropTypes.string.isRequired
}