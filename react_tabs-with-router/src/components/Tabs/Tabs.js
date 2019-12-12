import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import tabsContent from './tabsContent'
import './Tabs.css'

export default class Tabs extends React.Component {
    state = {
        tabs: [
            { id: 'tab-1', title: 'Home', content: tabsContent.Home },
            { id: 'tab-2', title: 'Profile', content: tabsContent.Profile },
            { id: 'tab-3', title: 'Contacts', content: tabsContent.Contacts },
        ],
        currentTab: null
    }

    handleClick = event => {
        this.setState({
            currentTab: event.target.innerText
        })
    }

    render() {
        const { location } = this.props
        const { tabs, currentTab } = this.state

        return (
            <>
                <h1>Tabs</h1>
                <button className="btn">
                    <Link to="/">Home</Link>
                </button>
                <br /><br />
                {tabs.map(tab => (
                    <NavLink
                        key={tab.id}
                        onClick={this.handleClick}
                        to={{
                            pathname: '/tabs',
                            hash: `/${tab.title}`
                        }}
                        exact
                        className="tab"
                        activeClassName={location.hash === `#/${tab.title}` ? 'tab_active': null}
                    >
                        {tab.title}
                    </NavLink>
                ))}
                <p>{tabsContent[currentTab]}</p>
            </>
        )
    }
}