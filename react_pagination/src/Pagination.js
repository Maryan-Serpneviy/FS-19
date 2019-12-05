import React from 'react'
import './Pagination.css'

export default function Pagination(props) {
    console.log(props.page)
    const pages = []
    for (let i = 1; i <= props.perPage; i++) {
        pages.push(
            <li onClick={props.onPageChange} key={i} className="page-item">
                <a className={props.page === i ? 'page-link page-link_active' : 'page-link'} href="#">{i}</a>
            </li>
        )
    }
    return (
        <ul className="pagination">
            <li className="page-item">
                <a className="page-link" href="#">
                    <span>&laquo;</span>
                </a>
            </li>
            {pages}
            <li className="page-item">
                <a className="page-link" href="#">
                    <span>&raquo;</span>
                </a>
            </li>
        </ul>
    )
}

