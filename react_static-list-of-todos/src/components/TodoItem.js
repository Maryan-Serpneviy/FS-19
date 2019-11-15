import React from 'react'

export default function TodoItem(props) {
    console.log(props)
    return (
        <div style={{ display: "flex", backgroundColor: "#eee" }}>
            <p style={{ flexGrow: 1 }}>User id: {props.userId}</p>
            <h3 style={{ flexGrow: 4 }}>{props.title}</h3>
        </div>
    )
}