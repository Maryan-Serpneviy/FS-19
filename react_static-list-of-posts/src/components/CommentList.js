import React from 'react'

import Comment from './Comment'
import comments from '../api/comments'

export default function CommentList(props) {
    return (
        <div className="comments">
            <h2>
                <em>Comments: </em>
            </h2>
            <ul className="comments-list">
                {comments.filter(comment => props.postId === comment.postId)
                    .map(comment => (
                        <Comment key={comment.id} content={comment.body} name={comment.name} email={comment.email} />
                    ))
                }
            </ul>
        </div>
    )
}