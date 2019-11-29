import React from 'react'
import Post from './Post'
import getPosts from '../api/posts'


export default class PostList extends React.Component {
    state = {
        isRequested: false,
        isLoaded: false,
        posts: [],
        filtered: [],
    }

    download = () => {
        this.setState({
            isRequested: true
        })

        getPosts()
            .then(posts => {
                this.setState({ isLoaded: true, posts, filtered: [...posts] })
            })
    }

    handleFiltering = e => {
        const highlighted = []
        this.state.posts.forEach(post => {
            if (post.title.includes(e.target.value) ||
                post.body.includes(e.target.value)) {
                highlighted.push(post)
            }
            if (post.title.match(e.target.value)) {
                post.matchTitle = e.target.value
            }
            if (post.body.match(e.target.value)) {
                post.matchBody = e.target.value
            }
        })

        this.setState({
            filtered: highlighted,
        })
        // this.setState({
        //     filtered: this.state.posts.filter(post => {
        //         return (
        //             post.title.includes(e.target.value) ||
        //             post.body.includes(e.target.value)
        //         )
        //     })
        // })
    }

    render() {
        const { isRequested, isLoaded, filtered } = this.state
        
        if (!isRequested) {
            return <button onClick={this.download}>Fetch</button>
        } else if (isLoaded) {
            return (
                <div className="post-list">
                    <input
                        onChange={this.handleFiltering}
                        type="text"
                        placeholder="Type to filter..."
                        style={{ padding: '3px 8px', width: 200, fontSize: 14 }}
                    />
                    <br />
                    <br />
                    <button onClick={() => window.location.reload()}>Reload</button>
                    {filtered.map(post => (
                        <Post
                            key={post.id}
                            postId={post.id}
                            userId={post.userId}
                            title={post.title}
                            body={post.body}
                            matchTitle={post.matchTitle || null}
                            matchBody={post.matchBody || null}
                        />
                    ))}
                </div>
            )
        } else {
            return <div>Loading post...</div>
        }
    }
}