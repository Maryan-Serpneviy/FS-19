import React from 'react'
import Markdown from 'react-mark'

import User from './User'
import getUsers from '../api/users'

import CommentList from './CommentList'

export default class Post extends React.Component {
    state = {
        isLoaded: false,
        users: []
    }
    title = React.createRef()
    body = React.createRef()

    componentDidMount() {
        getUsers()
            .then(users => {
                this.setState({ isLoaded: true, users })
            })
    }

    componentWillReceiveProps() {
        const highlitedTitle = this.title.current.textContent
            .replace(new RegExp(this.props.matchTitle, "gi"), `<mark>${this.props.matchTitle}</mark>`)
        this.title.current.innerHTML = highlitedTitle
        
        const highlitedBody = this.body.current.textContent
            .replace(new RegExp(this.props.matchBody, "gi"), `<mark>${this.props.matchBody}</mark>`)
        this.body.current.innerHTML = highlitedBody
    }

    render() {
        const { isLoaded, users } = this.state

        if (isLoaded) {
            return (
                <div className="post">
                    {/* post */}
                    <h2>
                        <em>Post:</em>
                    </h2>
                    <h2 ref={this.title}>{this.props.title}</h2>
                    <p ref={this.body}>{this.props.body}</p>
                    {/* user */}
                    {users.filter(user => user.id === this.props.userId)
                        .map(user => (
                            <User
                                key={user.id}
                                name={user.name}
                                email={user.email}
                                street={user.address.street}
                                suite={user.address.suite}
                                city={user.address.city}
                            />
                        ))
                    }
                    <CommentList post={this.props} />
                </div>
            )
        } else {
            return <div>Loading user...</div>
        }
        
    }
}