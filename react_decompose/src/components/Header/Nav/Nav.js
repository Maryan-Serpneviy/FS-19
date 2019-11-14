import React from 'react'
import './Nav.css'
import { NavLink } from './NavLink/NavLink';

export default function Nav() {
    return (
        <nav className="navigation">
            <NavLink name="About" />
            <NavLink name="Services" />
            <NavLink name="Contact" />
        </nav>
    )
}