import React from 'react'

export default function Article({ articleRequested, articleTitle, loadData, buttonLabel }) {
    if (!articleRequested) {
        return <button onClick={loadData}>{buttonLabel}</button>
    } else {
        if (articleTitle === null) {
            return <div>Loading...</div>
        } else {
            return <div>{articleTitle}</div>
        }
    }
}
