import React from 'react'
import PropTypes from 'prop-types'

export default function Comment(props) {
    return (
        <li className="comment">
            <p className="comment__content">{props.content}</p>            
            <p>
                <i>Name: {props.name} </i>
                Email: <u>{props.email}</u>
            </p>
        </li>
    )
}

Comment.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}