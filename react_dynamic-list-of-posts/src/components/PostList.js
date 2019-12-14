import React, {useState} from 'react'
import Post from './Post'
import getPosts from '../api/posts'

export default function PostList() {
    const [isRequested, setRequested] = useState(false)
    const [isLoaded, setLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [filtered, setFiltered] = useState([])
    const [inputVal, setInputVal] = useState('')

    function download() {
        setRequested(true)

        getPosts().then(data => {
            setLoaded(true)
            setPosts(data)
            setFiltered([...data])
        })
    }

    function handleFilter(event) {
        const { value } = event.target
        setInputVal(value)
        setFiltered(posts.filter(post => post.title.includes(value) || post.body.includes(value)))
    }
    
    if (!isRequested) {
        return <button onClick={download}>Fetch</button>
    } else if (isLoaded) {
        return (
            <div className="post-list">
                <input
                    value={inputVal}
                    onChange={handleFilter}
                    type="text"
                    placeholder="Type to filter..."
                    style={{ padding: '3px 8px', width: 200, fontSize: 14 }}
                />
                <br /><br />
                <button onClick={() => window.location.reload()}>Reload</button>
                {filtered.map(post => (
                    <Post
                        key={post.id}
                        postId={post.id}
                        userId={post.userId}
                        title={post.title}
                        body={post.body}
                        inputVal={inputVal}
                    />
                ))}
            </div>
        )
    } else {
        return <div>Loading post...</div>
    }
}