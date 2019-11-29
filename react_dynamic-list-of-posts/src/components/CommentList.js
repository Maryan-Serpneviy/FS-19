import React from 'react'

import Comment from './Comment'
import getComments from '../api/comments'

export default class CommentList extends React.Component {
    state = {
        isLoaded: false,
        comments: []
    }

    componentDidMount() {
        getComments()
            .then(comments => {
                this.setState({ isLoaded: true, comments })
            })
    }

    render() {
        const { isLoaded, comments } = this.state

        if (isLoaded) {
            return (
                <div className="comments">
                    <h2>
                        <em>Comments: </em>
                    </h2>
                    <ul className="comments-list">
                        {comments.filter(comment => this.props.post.postId === comment.postId)
                            .map(comment => (
                                <Comment
                                    key={comment.id}
                                    content={comment.body}
                                    name={comment.name}
                                    email={comment.email}
                                />
                            ))
                        }
                    </ul>
                </div>
            )
        } else {
            return <div style={{ fontSize: 20 }}>Loading comments...</div>
        }
    }
}