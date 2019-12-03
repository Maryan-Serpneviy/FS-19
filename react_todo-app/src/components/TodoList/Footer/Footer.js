import React from 'react'
import './Footer.scss'

export default function Footer(props) {
    return (
        <footer className="footer" style={{ display: 'block' }}>
            <span className="todo-count">{props.todosLeft} todos left</span>
                <ul className="filters">
                    <li>
                        <a href="#/" className="selected">All</a>
                    </li>

                    <li>
                        <a href="#/active">Active</a>
                    </li>

                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>

                <button className="clear-completed">Clear completed</button>
        </footer>
    )
}
