import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <button className="btn">
                <Link to="/tabs">Tabs</Link>
            </button>
        </>
    )
}