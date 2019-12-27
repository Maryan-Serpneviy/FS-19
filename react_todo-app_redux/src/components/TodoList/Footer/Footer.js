import React from 'react'
import PropTypes from 'prop-types'
import './Footer.scss'

export default function Footer(props) {
    const completed = props.todos.some(todo => todo.completed)
    const todosLeft = props.todos.filter(todo => !todo.completed).length

    return (
        <footer className="footer" style={{ filter: 'block' }}>
            <span className="todo-count">{todosLeft} todos left</span>
                <ul className="filters">
                    {['All', 'Active', 'Completed'].map(li => (
                        <li key={li}>
                            <a
                                href={`#/${li}`}
                                className={props.filter === li ? 'selected' : ''}
                                onClick={e => props.changeFilter(e.target.innerText)}
                            >{li}</a>
                        </li>
                    ))}
                </ul>
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
    filter: PropTypes.oneOf(['All', 'Active', 'Completed']).isRequired,
    changeFilter: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired
}
