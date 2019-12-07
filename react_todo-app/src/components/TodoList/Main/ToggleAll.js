import React from 'react'
import PropTypes from 'prop-types'

export default function ToggleAll({ checked, checkAllTodos }) {
    return (
        <>
            <input
                type="checkbox"
                id="toggle-all"
                className="toggle-all"
                checked={checked}
                onChange={checkAllTodos}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </>
    )
}

ToggleAll.propTypes = {
    checked: PropTypes.bool.isRequired,
    checkAllTodos: PropTypes.func.isRequired
}
