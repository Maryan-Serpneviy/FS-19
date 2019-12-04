import React from 'react'
import './Confirm.scss'

export default function Confirm(props) {
    return (
        <div className="todoapp__confirm">
            This action cannot be undone. Proceed?
            <button className="confirm-btn confirm_yes">√</button>
            <button className="confirm-btn confirm_no">&times;</button>
        </div>
    )
}
