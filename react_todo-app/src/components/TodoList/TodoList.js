import React from 'react'
import './TodoList.scss'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

export default function TodoList() {
    return (
        <section className="todoapp">
            <Header />
            <Main />
            <Footer />
        </section>
    )
}
