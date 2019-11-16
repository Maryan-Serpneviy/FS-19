import React from 'react'

export default function User(props) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Name: {props.name}</p>           
            <p>Username: {props.username}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}