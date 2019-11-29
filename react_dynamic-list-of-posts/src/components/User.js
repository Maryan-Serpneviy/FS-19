import React from 'react'

export default function User(props) {
    return (
        <div className="user">
            <em>Name: {props.name}</em>
            <p>Email: {props.email}</p>
            <div className="user__address">
                Address: {props.city}, {props.street}, {props.suite}
            </div>
            <br/>
        </div>
    )
}