import React from 'react'
import { NavLink } from 'react-router-dom'

export default function({ filter, children }) {
    return (
        <NavLink
            to={filter === 'All' ? '' : filter}
            className="filters--link"
            activeClassName="filters--link_selected"
            exact
        >
            {children}
        </NavLink>
    )
}
