import React from 'react'
import './Tabs.css'

export default function Tabs(props) {
    let activeTabContent
    for (const tab of props.tabs) {
        if (tab.active) {
            tab.activeClass = 'nav__tab_active'
            activeTabContent = tab.content
        } else {
            tab.activeClass = ''
        }
    }
    return (
        <div className="nav-wrapper">
            <ul className="nav">
                {props.tabs.map(tab => (
                    <li 
                    className={tab.activeClass}
                    onClick={() => props.onTabChange(tab.title)}
                    key={tab.title}>
                        {tab.title}
                    </li>
                ))}
            </ul>
            <p>{activeTabContent}</p>
        </div>        
    )
}