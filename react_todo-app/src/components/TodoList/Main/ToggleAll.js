import React from 'react'

export default function ToggleAll(props) {
    return (
        <>
            <input
                type="checkbox"
                id="toggle-all"
                className="toggle-all"
                checked={props.checked}
                onChange={props.toggleAllTodos}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </>
    )
}
