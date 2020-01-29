import React from 'react'
import PropTypes from 'prop-types'
import './Confirm.scss'

export default function Confirm(props) {
    const Callback = {
        remove: () => {
            props.removeTodo(props.currentId)
            props.showConfirm(false)
        },
        clear: () => {
            props.clearCompleted()
            props.showConfirm(false)
        }
    }
    return (
        <div className="todoapp__confirm">
            Confirm action
            <button
                onClick={Callback[props.action]}
                className="confirm-btn confirm_yes"
                name="confirm"
            >√</button>
            <button
                onClick={() => props.showConfirm(false)}
                className="confirm-btn confirm_no"
                name="decline"
            >&times;</button>
        </div>
    )
}

Confirm.propTypes = {
    action: PropTypes.string.isRequired,
    currentId: PropTypes.number.isRequired,
    showConfirm: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired
}
