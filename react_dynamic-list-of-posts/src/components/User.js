import React from 'react'
import PropTypes from 'prop-types'

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

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
}