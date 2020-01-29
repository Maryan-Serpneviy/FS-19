import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from './FilterLink'
import './Footer.scss'

export default function Footer(props) {
    const todosLeft = props.todos.filter(todo => !todo.completed).length
    const completed = props.todos.some(todo => todo.completed)

    return (
        <footer className="footer" style={{ filter: 'block' }}>
            <span className="todo-count">{todosLeft} todos left</span>
            <div className="filters">
                {['All', 'Active', 'Completed'].map(link => (
                    <FilterLink key={link} filter={link}>{link}</FilterLink>
                ))}
            </div>
            {completed ? <button
                onClick={props.confirmAction}
                className="clear-completed"
                name="clear"
            >
                Clear completed
            </button> : null}
        </footer>
    )
}

Footer.propTypes = {
    changeFilter: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired
}
