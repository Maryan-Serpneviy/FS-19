import React from 'react'
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
                <button className="clear-completed">Clear completed</button>
        </footer>
    )
}
