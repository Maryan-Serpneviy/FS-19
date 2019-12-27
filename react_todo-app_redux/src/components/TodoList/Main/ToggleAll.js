import React from 'react'
import PropTypes from 'prop-types'

export default function ToggleAll({ todos, checkAll }) {
    return (
        <>
            <input
                type="checkbox"
                id="toggle-all"
                className="toggle-all"
                checked={todos.every(todo => todo.completed)}
                onChange={checkAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </>
    )
}

ToggleAll.propTypes = {
    todos: PropTypes.array.isRequired,
    checkAll: PropTypes.func.isRequired
}
