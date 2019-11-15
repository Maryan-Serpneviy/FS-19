import React from 'react'

export default function User(props) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Name: {props.name}</div>           
            <div>Username: {props.username}</div>
        </div>
    )
}