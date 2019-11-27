import React from 'react'
import User from './User'
import getUsers from '../api/users'

export default class TodoItem extends React.Component {
    state = {
        loaded: false,
        users: null
    }

    componentDidMount() {
        getUsers().then(users => {
            this.setState({
                loaded: !this.state.loaded,
                users
            })
        })
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className="todo">
                    {/* task */}
                    <h3>{this.props.task}</h3>
                    {/* user */}
                    {this.state.users
                        .filter(user => this.props.userId === user.id)
                        .map(user => (
                            <User
                                key={user.id}
                                name={user.name}
                                username={user.username}
                                email={user.email}
                                completed={this.props.completed}
                            />
                        ))
                    }
                </div>
            )
        } else {
            return <p>Loading...</p>
        }
    }
}