import React from 'react'
import './App.css'
import Tabs from './components/Tabs/Tabs'
import tabsContent from './components/Tabs/tabsContent'

export default class App extends React.Component {
  state = {
    tabs: [
      { title: 'Home', content: tabsContent.tab1, active: true, activeClass: 'nav__tab_active' },
      { title: 'Profile', content: tabsContent.tab2, active: false, activeClass: '' },
      { title: 'Contacts', content: tabsContent.tab3, active: false, activeClass: '' }
    ]
  }

  onTabSelected = title => {
    this.setState(prev => {
      const updatedTabs = prev.tabs.map(tab => {
        if (tab.active) {
          tab.active = false
        }
        if (!tab.active && tab.title === title) {
          return {
            ...tab,
            active: !tab.active
          }
        }
        return tab
      })
      return {
        tabs: updatedTabs
      }
    })
  }

  render() {
    const { tabs } = this.state

    return (
      <div className="App">
        <h1>React tabs</h1>
        <Tabs onTabChange={this.onTabSelected} tabs={tabs} />
      </div>
    );
  }
}