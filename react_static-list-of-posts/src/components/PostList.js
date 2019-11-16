import React from 'react'
import Post from './Post'
import posts from '../api/posts'

export default function PostList() {
    return (
        <div className="post-list">
            {posts.map(post => (
                <Post key={post.id} postId={post.id} userId={post.userId} title={post.title} body={post.body} />
            ))}
        </div>
    )
}