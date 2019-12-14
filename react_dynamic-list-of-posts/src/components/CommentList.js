import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import getComments from '../api/comments'

export default function CommentList(props) {
    const [isLoaded, setLoaded] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then(data => {
            setLoaded(true)
            setComments(data)
        })
    }, [])

    if (isLoaded) {
        return (
            <div className="comments">
                <h2>
                    <em>Comments: </em>
                </h2>
                <ul className="comments-list">
                    {comments.filter(comment => props.post.postId === comment.postId)
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

CommentList.propTypes = {
    post: PropTypes.object.isRequired
}