import React from 'react'

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