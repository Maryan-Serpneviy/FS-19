import React from 'react'
import PropTypes from 'prop-types'
import './Confirm.scss'

export default function Confirm(props) {
    const Callback = {
        remove: () => props.removeTodo(props.currentId),
        clear: () => props.clearCompleted()
    }
    return (
        <div className="todoapp__confirm">
            This action cannot be undone. Proceed?
            <button
                onClick={Callback[props.action]}
                className="confirm-btn confirm_yes"
                name="confirm"
            >√</button>
            <button
                onClick={props.confirmAction}
                className="confirm-btn confirm_no"
                name="decline"
            >&times;</button>
        </div>
    )
}

Confirm.propTypes = {
    action: PropTypes.string.isRequired,
    currentId: PropTypes.number.isRequired,
    removeTodo: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired
}
