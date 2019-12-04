import React from 'react'
import PropTypes from 'prop-types'
import './Footer.scss'

export default function Footer(props) {
    return (
        <footer className="footer" style={{ display: 'block' }}>
            <span className="todo-count">{props.todosLeft} todos left</span>
                <ul className="filters">
                    {['All', 'Active', 'Completed'].map(li => (
                        <li key={li}>
                            <a
                                href={`#/${li}`}
                                className={props.display === li ? 'selected' : ''}
                                onClick={props.filterDisplay}
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
    display: PropTypes.oneOf(['All', 'Active', 'Completed']).isRequired,
    completed: PropTypes.bool.isRequired,
    filterDisplay: PropTypes.func.isRequired,
    confirmAction: PropTypes.func.isRequired
}
