import React from 'react'
import PropTypes from 'prop-types'
import './Footer.scss'

export default function Footer(props) {
    function changeFilter(event) { // All / Active / Completed
        props.changeFilter(event.target.innerText)
    }

    return (
        <footer className="footer" style={{ filter: 'block' }}>
            <span className="todo-count">{props.todosLeft} todos left</span>
                <ul className="filters">
                    {['All', 'Active', 'Completed'].map(li => (
                        <li key={li}>
                            <a
                                href={`#/${li}`}
                                className={props.filter === li ? 'selected' : ''}
                                onClick={props.changeFilter}
                            >{li}</a>
                        </li>
                    ))}
                </ul>
                {props.completed ? <button
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
    todosLeft: PropTypes.number.isRequired,
    filter: PropTypes.oneOf(['All', 'Active', 'Completed']).isRequired,
    changeFilter: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    confirmAction: PropTypes.func.isRequired
}
