import React from 'react'

export default function Comment(props) {
    return (
        <li className="comment">
            <p className="comment__content">{props.content}</p>            
            <p>{props.name} {props.email}</p>
        </li>
    )
}